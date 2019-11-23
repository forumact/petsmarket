<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Access\CsrfTokenGenerator;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\user\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "user_logged_in_status_rest_resource",
 *   label = @Translation("User logged in status rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/user-check-status"
 *   }
 * )
 */
class UserLoggedInStatusRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;



  /**
   * The CSRF token generator.
   *
   * @var \Drupal\Core\Access\CsrfTokenGenerator
   */
  protected $csrfToken;

  /**
   * Constructs a new UserLoggedInStatusRestResource object.
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
        AccountProxyInterface $current_user,
        CsrfTokenGenerator $csrf_token) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->currentUser = $current_user;
    $this->csrfToken = $csrf_token;
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
          $container->get('current_user'),
          $container->get('csrf_token'),
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

    // You must to implement the logic of your REST Resource here.
    // Use current user after pass authentication to validate access.
    if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }

    $results = [];
    $entity = User::load($this->currentUser->id());

    if ($entity->isAnonymous()) {
      return new ModifiedResourceResponse($results, 200);
    }
    // $results['member_since'] = date('F, d\t\h Y', $entity->get('created')->value);
    // $results['contact'] = '9976668675';
    // $results['email'] = 'raj@gmail.com';
    $results['uid'] = $this->currentUser->id();
    $results['csrf_token'] = $this->csrfToken->get('rest');
    $results['token'] = $this->csrfToken->get('rest');
    $results['sessid'] = \Drupal::service('session')->getId();
    $results['session_name'] = \Drupal::service('session')->getName();
    $results['user_pic'] = PigeonsWorldHelper::fetchImage($entity, 'user_picture', 'avatar');
    $results['about'] = $entity->get('field_about')->value;
    $results['website'] = $entity->get('field_website')->value;

    return new ModifiedResourceResponse($results, 200);
  }

}
