<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\node\Entity\Node;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "blog_latest_rest_resource",
 *   label = @Translation("Fetch Latest or Popular blogs"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/blog-latest"
 *   }
 * )
 */
class BlogLatestRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new BlogLatestRestResource object.
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
   * Responds to POST requests.
   *
   * @param string $payload
   *
   * @return \Drupal\rest\ModifiedResourceResponse
   *   The HTTP response object.
   *
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   */
  public function get() {

    $result = [];
	
	$nid = \Drupal::request()->query->get('nid');
	$type = \Drupal::request()->query->get('type');
    
    $bundle = 'blog';
    $query = \Drupal::entityQuery('node');
    $query->condition('status', 1);
    $query->condition('type', $bundle);
    if ($type == 'Latest Blogs') {
      $query->sort('changed', 'DESC');
    }
    else {
      $query->sort('nid');
    }
    if ($nid) {
      $query->condition('nid', $nid, '!=');
    }
    $query->range(0, 5);
    $entity_ids = $query->execute();

    if (!empty($entity_ids)) {
      $entities = Node::loadMultiple($entity_ids);
      $i = 0;
      foreach ($entities as $key => $entity) {
        $fid = NULL;
        $fid = $entity->field_pigeon->target_id;
        $result[$i]['nid'] = $entity->id();
        $result[$i]['title'] = $entity->getTitle();
        $result[$i]['comment_count'] = $entity->get('comment')->comment_count;
        $result[$i]['img'] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon1', 'favourites');
        $i++;
      }
    }

    $response = new ResourceResponse($result, 200);
    $disable_cache = new CacheableMetadata();
    // $disable_cache->setCacheTags(['node_list']);
    $disable_cache->setCacheMaxAge(0);
    $response->addCacheableDependency($disable_cache);
    return $response;
  }

}
