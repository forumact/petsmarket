<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\node\Entity\Node;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "blog_rest_resource",
 *   label = @Translation("Fetch Blog List"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/blog"
 *   }
 * )
 */
class BlogFetchRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new BlogFetchRestResource object.
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
  public function get() {

    $numberOfItem = \Drupal::request()->query->get('numberofitem');
    $pageNumber = \Drupal::request()->query->get('pagenumber');

    $itemCount = ($numberOfItem) ? $numberOfItem : 5;
    $start = $itemCount * $pageNumber;

    $result = [];
    $bundle = 'blog';
    $result['count'] = \Drupal::entityQuery('node')->condition('type', $bundle)->count()->execute();

    $query = \Drupal::entityQuery('node');
    $query->condition('status', 1);
    $query->condition('type', $bundle);
    $query->sort('nid');
    $query->range($start, $itemCount);
    $entity_ids = $query->execute();

    if (!empty($entity_ids)) {
      $entities = Node::loadMultiple($entity_ids);
      $flag_service = \Drupal::service('flag.count');
      $i = 0;
      foreach ($entities as $key => $entity) {
        $fid = NULL;
        $flag_count = $flag_service->getEntityFlagCounts($entity);
        $fid = $entity->field_pigeon->target_id;
        $result['blogs'][$i]['nid'] = $entity->id();
        $result['blogs'][$i]['title'] = $entity->getTitle();
        $result['blogs'][$i]['body'] = strip_tags($entity->get('body')->value);
        $result['blogs'][$i]['created'] = date('Y-m-d', $entity->created->value);
        $result['blogs'][$i]['country_of_origin'] = $entity->get('field_country_of_origin')->value;
        $result['blogs'][$i]['username'] = $entity->getOwner()->getDisplayName();
        $result['blogs'][$i]['comment_count'] = $entity->get('comment')->comment_count;
        $result['blogs'][$i]['flag_count'] = (isset($flag_count['favourites'])) ? $flag_count['favourites'] : '0';
        $result['blogs'][$i]['img'] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon1', 'blog');
        $i++;
      }
    }

    // Return new ResourceResponse($result, 200);.
    $response = new ResourceResponse($result, 200);
    $disable_cache = new CacheableMetadata();
    // $disable_cache->setCacheTags(['node_list']);
    $disable_cache->setCacheMaxAge(0);
    $response->addCacheableDependency($disable_cache);
    \Drupal::logger('rest')->notice('BlogFetchRestResource');
    return $response;
  }

}
