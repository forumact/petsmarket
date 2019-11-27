<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\node\Entity\Node;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "product_details_rest_resource",
 *   label = @Translation("Product details rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/pigeons-details"
 *   }
 * )
 */
class PigeonsFetchSingleRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new PigeonsFetchSingleRestResource object.
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
  public function get($payload) {
    $result = [];
	
	$nid = \Drupal::request()->query->get('nid');
	
    $entity = Node::load($nid);

    $flag_service = \Drupal::service('flag.count');
    $flag_count = $flag_service->getEntityFlagCounts($entity);

    $result['title'] = $entity->getTitle();
    $result['body'] = $entity->get('body')->value;
    $result['uid'] = $entity->getOwnerId();
    $result['update'] = date('F, d\t\h Y', $entity->getChangedTime());
    $result['imguri'] = $fid = $entity->field_pigeon->target_id;
    $result['condition'] = $entity->get('field_conditions')->value;
    $result['category'] = $entity->get('field_category')->value;
	$result['advert_type']= $entity->get('field_advert_type')->value;
    $result['status'] = $entity->get('field_status')->value;
    $result['city'] = $entity->get('field_city')->value;
    $result['price'] = $entity->get('field_price')->value;
    $result['flag_count'] = ($flag_count['favourites']) ? $flag_count['favourites'] : '';
    $result['nid'] = $entity->id();
	
	$result['picture1'] = $entity->field_pigeon1->target_id;	
    $result['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon1', 'product_detail');	
	if ($entity->get('field_pigeon2')->target_id) {		
	  $result['picture2'] = $entity->field_pigeon2->target_id;
	  $result['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon2', 'product_detail');
	}	
	
	if ($entity->get('field_pigeon3')->target_id) {
	  $result['picture3'] = $entity->field_pigeon3->target_id;
	  $result['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon3', 'product_detail');
	}
	if ($entity->get('field_pigeon4')->target_id) {
	  $result['picture4'] = $entity->field_pigeon4->target_id;
      $result['img'][] = PigeonsWorldHelper::fetchImage($entity, 'field_pigeon4', 'product_detail');
	}
	
    
    \Drupal::logger('rest')->notice('PigeonsFetchSingleRestResource');
    return new ModifiedResourceResponse($result, 200);
  }

}
