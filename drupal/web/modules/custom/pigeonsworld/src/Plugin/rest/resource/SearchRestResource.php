<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\search_api\Entity\Index;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\node\Entity\Node;
use Drupal\user\Entity\User;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "search_rest_resource",
 *   label = @Translation("Search rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/search"
 *   }
 * )
 */
class SearchRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new SearchRestResource object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   */
  public function __construct(
        array $configuration,
        $plugin_id,
        $plugin_definition,
        array $serializer_formats,
        LoggerInterface $logger,
        AccountProxyInterface $current_user) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->currentUser = $current_user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
          $configuration,
          $plugin_id,
          $plugin_definition,
          $container->getParameter('serializer.formats'),
          $container->get('logger.factory')->get('pigeonsworld'),
          $container->get('current_user')
      );
  }

  /**
   * Responds to GET requests.
   *
   * @param string $payload
   *
   * @return \Drupal\rest\ResourceResponse
   *   The HTTP response object.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function get($payload) {
	
	$numberOfItem = \Drupal::request()->query->get('numberofitem');
    $pageNumber = \Drupal::request()->query->get('pagenumber');
    $category = \Drupal::request()->query->get('category');
    $key = \Drupal::request()->query->get('key');
	$uid = \Drupal::request()->query->get('uid');
	
	$itemCount = ($numberOfItem) ? $numberOfItem : 5;
    $start = $itemCount * $pageNumber;
	
    $entity_ids = $result = [];
    $index = Index::load('default_index');

    $query = $index->query();
    $query->keys($key);
    $query->setFulltextFields(['title', 'body']);
	if($category != 'All'){
	  $query->addCondition('field_category', $category);		
	}
	$query->addCondition('type', 'pigeon');
	$query->addCondition('status', 1);
    $query->range($start, $itemCount);
    $data = $query->execute();
    $query->sort('search_api_relevance', 'DESC');
    $query_results = $query->execute();
	
	$result['count'] = $query_results->getResultCount();

    $entity_ids = $this->parse_results($query_results->getResultItems());

    if (!empty($entity_ids)) {
      $entities = Node::loadMultiple($entity_ids);
      // print_r($entities);die;
      $flag = \Drupal::service('flag')->getFlagById('favourites');
      $userId = $this->currentUser->id();
      $account = User::load($userId);

      $i = 0;
      foreach ($entities as $key => $entity) {
        $flagStatus = 'stop';
        if (!$account->isAnonymous()) {
          $flagStatus = ($flag->isFlagged($entity, $account)) ? 'Flagged' : 'UnFlagged';
        }
        $result['searchItems'][$i]['nid'] = $entity->id();
        $result['searchItems'][$i]['title'] = $entity->getTitle();
        $result['searchItems'][$i]['created'] = $entity->created->value;
        $result['searchItems'][$i]['name'] = $entity->getOwner()->getDisplayName();
        $result['searchItems'][$i]['uid'] = $entity->getOwnerId();
        $result['searchItems'][$i]['username'] = $entity->getOwner()
          ->getDisplayName();
        $result['searchItems'][$i]['flag'] = $flagStatus;
        $result['searchItems'][$i]['phone'] = 'Phone';
        $result['searchItems'][$i]['body'] = strip_tags($entity->get('body')->value);
        $result['searchItems'][$i]['price'] = $entity->get('field_price')->value;
        $result['searchItems'][$i]['category'] = $entity->get('field_category')->value;
        $result['searchItems'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon1', 'product');
        $result['searchItems'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon2', 'product');
        $result['searchItems'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon3', 'product');
        $result['searchItems'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon4', 'product');
        $postOwner = User::load($entity->getOwnerId());
        $result['searchItems'][$i]['avatar'] = PigeonsWorldHelper::fetchImage($postOwner, 'user_picture', 'avatar');

        $i++;
      }
    }

    $response = new ResourceResponse($result, 200);
    $disable_cache = new CacheableMetadata();
    // $disable_cache->setCacheTags(['node_list']);
    $disable_cache->setCacheMaxAge(0);
    $response->addCacheableDependency($disable_cache);
    \Drupal::logger('rest')->notice('SearchFetchRestResource');
    return $response;
  }

  /**
   *
   */
  public function parse_results(array $results) {
    $list = [];
    foreach ($results as $item) {
      // print_r($item->getOriginalObject()->getValue());die;
      // The pattern is "entity:[entity_type]:[entity_id]:[language_code]".
      // For example "entity:node/1:en".
      $data = explode(':', $item->getId());
      $data = explode('/', $data[1]);
      $list[] = $data[1];
    }
    return $list;
  }

}
