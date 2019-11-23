<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Drupal\user\Entity\User;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "user_fetch_rest_resource",
 *   label = @Translation("User fetch rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/user"
 *   }
 * )
 */
class UserFetchRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new UserFetchRestResource object.
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
    $entity = User::load($this->currentUser->id());
    $results['member_since'] = date('F, d\t\h Y', $entity->getCreatedTime());
    $results['total_items'] = 245;
    $results['first_name'] = ($entity->get('field_first_name')->value) ? ($entity->get('field_first_name')->value) : 'NA';
    $results['last_name'] = ($entity->get('field_last_name')->value) ? ($entity->get('field_last_name')->value) : 'NA';
    $results['email'] = $entity->getEmail();
    $results['username'] = $entity->getUsername();
    $results['mobile'] = ($entity->get('field_mobile')->value) ? ($entity->get('field_mobile')->value) : 'NA';
    $results['website'] = ($entity->get('field_website')->value) ? ($entity->get('field_website')->value) : 'NA';
    $results['about'] = $entity->get('field_about')->value;
    $results['city'] = $entity->get('field_city')->value;
    $results['notification'] = ($entity->get('field_notification')->value) ? TRUE : FALSE;
    $results['uid'] = $entity->id();
    $results['avatar'] = PigeonsWorldHelper::fetchImage($entity, 'user_picture', 'avatar');
	$results['user_picture'] = $entity->user_picture->target_id;
    return new ModifiedResourceResponse($results, 200);
  }

}
