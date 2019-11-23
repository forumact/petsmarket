<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\user\Entity\User;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "user_create_rest_resource",
 *   label = @Translation("User create rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/user/create"
 *   }
 * )
 */
class UserCreateRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new UserCreateRestResource object.
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
    $result = [];

    $user = User::create();
    $user->setPassword($payload['password']);
    $user->enforceIsNew();
    $user->setEmail($payload['email']);
    $user->setUsername($payload['user_name']);
    $user->set("field_first_name", $payload['first_name']);
    $user->set("field_last_name", $payload['last_name']);
	$user->set("field_city", $payload['city']);
    $user->user_picture->setValue(['target_id' => $payload['user_picture']]);
    $user->activate();
    // Save user.
    $user->save();
    // $user = User::load($user->id());
    // user_login_finalize($user);
    $result['uid'] = $user->id();
    \Drupal::logger('rest')->notice('UserCreateRestResource');
    return new ModifiedResourceResponse($result, 200);
  }

}
