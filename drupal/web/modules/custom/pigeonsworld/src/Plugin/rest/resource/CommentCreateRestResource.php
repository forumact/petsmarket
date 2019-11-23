<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\comment\Entity\Comment;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\Component\Utility\Unicode;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "create_comment_rest_resource",
 *   label = @Translation("Create comment rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/comment/create"
 *   }
 * )
 */
class CommentCreateRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new CommentCreateRestResource object.
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
   * Responds to PUT requests.
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

    $values = [
      'entity_type' => 'node',
      'entity_id' => $payload['nid'],
      'field_name' => 'comment',
      'uid' => $payload['uid'],
      'comment_type' => 'comment',
      'subject' => Unicode::truncate($payload['subject'], 20, TRUE),
      'comment_body' => $payload['comment_body'],
      'status' => 1,
    ];

    // This will create an actual comment entity out of our field values.
    $comment = Comment::create($values);

    // Last, we actually need to save the comment to the database.
    $result = $comment->save();

    \Drupal::logger('rest')->notice('CommentCreateRestResource');

    return new ModifiedResourceResponse($comment->id(), 201);
  }

}
