<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\pigeonsworld\Helper\PigeonsWorldHelper;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\user\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "pigeons_fetch_seller_info_rest_resource",
 *   label = @Translation("Pigeons fetch seller info rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/seller-info"
 *   }
 * )
 */
class PigeonsFetchSellerInfoRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new PigeonsFetchSellerInfoRestResource object.
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

    $uid = \Drupal::request()->query->get('uid');
    $userObject = User::load($uid);
    $results['name'] = $userObject->get('name')->value;
    $results['about'] = $userObject->get('field_about')->value;
	$results['mobile'] = $userObject->get('field_mobile')->value;
    $results['uid'] = $userObject->id();
    $results['picture'] = PigeonsWorldHelper::fetchImage($userObject, 'user_picture', 'avatar');
    $results['created'] = date('Y-m-d', $userObject->created->value);

    return new ModifiedResourceResponse($results, 200);
  }

}
