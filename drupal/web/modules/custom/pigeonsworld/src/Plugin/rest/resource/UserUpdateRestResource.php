<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\user\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "user_update_rest_resource",
 *   label = @Translation("User update rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/user/update"
 *   }
 * )
 */
class UserUpdateRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new UserUpdateRestResource object.
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

    // print_r($payload);die;
    $user = User::load($this->currentUser->id());
    // print_r($user);die;
    // $user->setPassword($payload['pass']);
    $user->setEmail($payload['email']);
    $user->set('field_about', $payload['about']);
    $user->set('field_website', $payload['website']);
    $user->set('field_mobile', $payload['mobile']);
    $user->set('field_first_name', $payload['first_name']);
    $user->set('field_last_name', $payload['last_name']);
    $user->set('field_city', $payload['city']);
    $user->set('field_notification', $payload['notification']);
    // $user->setUsername($payload['username']);
    $user->user_picture->setValue(['target_id' => $payload['user_picture']]);
    $result = $user->save();

    \Drupal::logger('rest')->notice('UserUpdateRestResource');
    return new ModifiedResourceResponse($payload, 200);
  }

}
