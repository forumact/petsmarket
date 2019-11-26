<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\comment\Entity\Comment;
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
 *   id = "fetch_comment_rest_resource",
 *   label = @Translation("Fetch comment rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/comment"
 *   }
 * )
 */
class CommentFetchListRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new CommentFetchListRestResource object.
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

    $numberOfItem = \Drupal::request()->query->get('numberofitem');
    $pageNumber = \Drupal::request()->query->get('pagenumber');	
	
	$itemCount = ($numberOfItem) ? $numberOfItem : 5;
    $start = $itemCount * $pageNumber;	

    $result = [];

	$query = \Drupal::database()->select('comment_field_data', 'c');
    $query->addExpression('COUNT(*)', 'count');
    $query->condition('entity_id', $payload['nid']);
    $count = $query->execute()->fetchField();


    $result['count'] =  (int) $count;
    $connection = \Drupal::database();
    $queryresult = $connection->select('comment_field_data', 'cfd')
      ->fields('cfd', ['cid'])
      ->condition('entity_id', $payload['nid'])
	  ->range($start, $itemCount)
      ->execute()->fetchCol();

    if (!empty($queryresult)) {
      $comments = Comment::loadMultiple($queryresult);
      // print_r($comments);
      $i = 0;
      foreach ($comments as $key => $comment) {
        $result['comment'][$i]['cid'] = $comment->id();
        $result['comment'][$i]['comment_body'] = $comment->get('comment_body')->value;
        $result['comment'][$i]['created'] = date('F, d\t\h Y', $comment->get('created')->value);
        $result['comment'][$i]['uid'] = $comment->getOwnerId();
        $commentOwner = User::load($comment->getOwnerId());
        $result['comment'][$i]['avatar'] = PigeonsWorldHelper::fetchImage($commentOwner, 'user_picture', 'avatar');
        $result['comment'][$i]['uname'] = $comment->getOwner()->getDisplayName();
        $i++;
      }
    }

    \Drupal::logger('rest')->notice('CommentFetchListRestResource');
    return new ModifiedResourceResponse($result, 200);
  }

  /**
   *
   */
  public function fetchUsername($uid) {
    // Pass your uid.
    $account = User::load($uid);
    return $name = $account->getUsername();

  }

}
