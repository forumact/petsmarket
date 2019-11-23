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
use Drupal\user\UserStorageInterface;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "flag_fetch_list_rest_resource",
 *   label = @Translation("Fetch flag information by uid"),
 *   uri_paths = {
 *     "create" = "/api/v1/flag"
 *   }
 * )
 */
class FlagFetchListRestResource extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  protected $user_storage;

  /**
   * Constructs a new FlagFetchListRestResource object.
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
    UserStorageInterface $user_storage) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->currentUser = $current_user;

    $this->user_storage = $user_storage;
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
      $container->get('entity_type.manager')->getStorage('user')
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

    $result = [];
    $itemCount = ($payload['numberofitem']) ? $payload['numberofitem'] : 5;
    $start = $payload['pagenumber'] * $payload['numberofitem'];

    // You must to implement the logic of your REST Resource here.
    // Use current user after pass authentication to validate access.
    if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }

    $flag = \Drupal::service('flag')->getFlagById('favourites');
    $userId = $this->currentUser->id();
    $user = $this->user_storage->load($userId);
    // $user = \Drupal::currentUser();
    $session_id = \Drupal::service('session_manager')->getId();

    $query = \Drupal::database()->select('flagging', 't');
    $query->addExpression('COUNT(*)', 'count');
    $query->condition('flag_id', $flag->id());
    $query->condition('uid', $payload['uid']);
    $count = $query->execute()->fetchField();

    $result['count'] = $count;

    // Use a query.
    $query = \Drupal::database()
      ->select('flagging', 'f')
      ->fields('f', [])
      ->condition('flag_id', $flag->id())
      ->condition('uid', $payload['uid']);

    if ($user->isAnonymous()) {
      $query->condition('session_id', $session_id);
    }

    $query->range($start, $itemCount);
    $flagresult = $query->execute()
      ->fetchAll();

    $i = 0;
    foreach ($flagresult as $key => $val) {
      $nodeObject = Node::load($val->entity_id);
      $result['flags'][$i]['fid'] = $val->id;
      $result['flags'][$i]['nid'] = $val->entity_id;
      $result['flags'][$i]['title'] = $nodeObject->getTitle();
      $result['flags'][$i]['body'] = $nodeObject->get('body')->value;
      $result['flags'][$i]['category'] = $nodeObject->get('field_category')->value;
      $result['flags'][$i]['condition'] = $nodeObject->get('field_conditions')->value;
      $result['flags'][$i]['price'] = $nodeObject->get('field_price')->value;
      $result['flags'][$i]['uname'] = $nodeObject->getOwner()->getDisplayName();
      $result['flags'][$i]['comment_count'] = $nodeObject->get('comment')->comment_count;
      $result['flags'][$i]['flag_count'] = \Drupal::service('flag.count')->getEntityFlagCounts($nodeObject);
      $result['flags'][$i]['uid'] = $nodeObject->getOwnerId();
      $postOwner = $this->user_storage->load($nodeObject->getOwnerId());
      $result['flags'][$i]['img'] = PigeonsWorldHelper::fetchImage($nodeObject, 'field_pigeon1', 'favourites');
      $result['flags'][$i]['avatar'] = PigeonsWorldHelper::fetchImage($postOwner, 'user_picture', 'avatar');
      $i++;
    }

    \Drupal::logger('rest')->notice('FlagFetchListRestResource');
    return new ModifiedResourceResponse($result, 200);
  }

}
