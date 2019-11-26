<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\node\Entity\Node;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\user\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "pigeons_rest_resource",
 *   label = @Translation("Fetch Pigeons List"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/pigeons"
 *   }
 * )
 */
class PigeonsFetchListRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new PigeonsFetchListRestResource object.
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

    $itemCount = ($numberOfItem) ? $numberOfItem : 5;
    $start = $itemCount * $pageNumber;
		
    $result = [];

    $bundle = 'pigeon';

    $countQuery = \Drupal::entityQuery('node');
    $countQuery->condition('type', $bundle);
    if (!empty($payload['uid'])) {
      $countQuery->condition('uid', $payload['uid']);
    }
    if (!empty($payload['filter'])) {
      $countQuery->condition('field_category', $payload['filter'], 'IN');
    }
    $result['count'] = $countQuery->count()->execute();

    $query = \Drupal::entityQuery('node');
    $query->condition('status', 1);
    $query->condition('type', $bundle);
    if (!empty($payload['uid'])) {
      $query->condition('uid', $payload['uid']);
    }

    if (!empty($payload['filter'])) {
      $query->condition('field_category', $payload['filter'], 'IN');
    }

    $query->sort('nid');
    $query->range($start, $itemCount);
    $entity_ids = $query->execute();

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
        $result['products'][$i]['nid'] = $entity->id();
        $result['products'][$i]['title'] = $entity->getTitle();
        $result['products'][$i]['created'] = $entity->created->value;
        $result['products'][$i]['name'] = $entity->getOwner()->getDisplayName();
        $result['products'][$i]['uid'] = $entity->getOwnerId();
        $result['products'][$i]['username'] = $entity->getOwner()
          ->getDisplayName();
        $result['products'][$i]['flag'] = $flagStatus;
        $result['products'][$i]['phone'] = 'Phone';
        $result['products'][$i]['body'] = strip_tags($entity->get('body')->value);
        $result['products'][$i]['price'] = $entity->get('field_price')->value;
        $result['products'][$i]['category'] = $entity->get('field_category')->value;
        $result['products'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon1', 'product');
		if ($entity->get('field_pigeon2')->target_id) {
          $result['products'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon2', 'product');
		}
		if ($entity->get('field_pigeon3')->target_id) {
          $result['products'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon3', 'product');
		}
		if ($entity->get('field_pigeon4')->target_id) {
          $result['products'][$i]['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon4', 'product');
		}
		
        $postOwner = User::load($entity->getOwnerId());
        $result['products'][$i]['avatar'] = PigeonsWorldHelper::fetchImage($postOwner, 'user_picture', 'avatar');

        $i++;
      }
    }

    $response = new ResourceResponse($result, 200);
    $disable_cache = new CacheableMetadata();
    $disable_cache->setCacheMaxAge(0);
    $response->addCacheableDependency($disable_cache);
    \Drupal::logger('rest')->notice('PigeonsFetchListRestResource');
    return $response;

  }

}
