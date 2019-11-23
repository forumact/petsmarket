<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\user\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "user_basic_info_rest_resource",
 *   label = @Translation("User basic info rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/user-basic-info"
 *   }
 * )
 */
class UserBasicInfoRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new UserBasicInfoRestResource object.
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
  public function post($payload) {
    $results = [];
    $entity = User::load($payload['uid']);
	
	$query = db_select('node_field_data', 'n')
      ->condition('n.type', 'pigeon')
	  ->condition('n.uid', $payload['uid'])
      ->fields('n', array('nid'))
	  ->countQuery()
      ->execute();
      $num = $query->fetchField();
	
    // print_r($entity);die;
    $results['member_since'] = date('F, d\t\h Y', $entity->getCreatedTime());
    $results['total_items'] = $num;
    $results['contact'] = ($entity->get('field_mobile')->value) ? ($entity->get('field_mobile')->value) : 'NA';
	$results['city'] = ($entity->get('field_city')->value) ? ($entity->get('field_city')->value) : '';
    $results['email'] = $entity->getEmail();
    $results['username'] = $entity->getUsername();
    $results['about'] = $entity->get('field_about')->value;
    $results['uid'] = $entity->id();
    $results['picture'] = PigeonsWorldHelper::fetchImage($entity, 'user_picture', 'avatar');
    $results['created'] = date('Y-m-d', $entity->created->value);
    return new ModifiedResourceResponse($results, 200);
  }

}
