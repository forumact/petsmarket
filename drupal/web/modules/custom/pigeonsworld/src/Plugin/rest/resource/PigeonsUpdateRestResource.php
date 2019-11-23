<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\node\Entity\Node;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "pigeons_update_rest_resource",
 *   label = @Translation("Pigeons update rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/pigeons/update"
 *   }
 * )
 */
class PigeonsUpdateRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new PigeonsUpdateRestResource object.
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

    // You must to implement the logic of your REST Resource here.
    // Use current user after pass authentication to validate access.
    if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }

    $node = Node::load($payload['item_nid']);

    $node->set('title', $payload['item_name']);
    $body = [
      'value' => $payload['item_description'],
      'format' => 'basic_html',
    ];

    $node->set('body', $body);
    $node->set('field_category', $payload['item_category']);
    $node->set('field_city', $payload['item_city']);
    $node->set('field_conditions', $payload['item_conditions']);
    $node->set('field_price', $payload['item_price']);
    $node->set('field_status', $payload['item_status']);
    $node->field_pigeon1->setValue(['target_id' => $payload['item_picture1']]);
    $node->field_pigeon2->setValue(['target_id' => $payload['item_picture2']]);
    $node->field_pigeon3->setValue(['target_id' => $payload['item_picture3']]);
    $node->field_pigeon4->setValue(['target_id' => $payload['item_picture4']]);
    $node->set('uid', $this->currentUser->id());
    $node->save();
    $result['nid'] = $node->id();
    return new ModifiedResourceResponse($result, 200);
  }

}
