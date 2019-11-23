<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\Core\Cache\CacheableMetadata;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "fetch_footer_rest_resource",
 *   label = @Translation("Fetch footer rest resource"),
 *   uri_paths = {
 *     "canonical" = "/api/v1/footerdetails"
 *   }
 * )
 */
class FetchFooterRestResource extends ResourceBase {

    /**
     * A current user instance.
     *
     * @var \Drupal\Core\Session\AccountProxyInterface
     */
    protected $currentUser;

    /**
     * Constructs a new FetchFooterRestResource object.
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
     * Responds to GET requests.
     *
     * @param string $payload
     *
     * @return \Drupal\rest\ResourceResponse
     *   The HTTP response object.
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     *   Throws exception expected.
     */
    public function get($payload) {  

		$query = \Drupal::database()->select('users_field_data', 'u');
		$query->addExpression('COUNT(*)', 'count');		
		$query->condition('status', 1);
		$count = $query->execute()->fetchField();
		
        $result['members_count'] = $count;	
		
		
		$query = \Drupal::database()->select('users_field_data', 'u');
		$query->addExpression('COUNT(*)', 'count');		
		$query->condition('status', 1);
		$count = $query->execute()->fetchField();
		
		$result['sellers_count'] = $count;
		
		$query = \Drupal::database()->select('node_field_data', 'n');
		$query->addExpression('COUNT(*)', 'count');		
		$query->condition('status', 1);
		$count = $query->execute()->fetchField();
		
		$result['products_count'] = $count;
        
		$response = new ResourceResponse($result, 200);
		$disable_cache = new CacheableMetadata();
		$disable_cache->setCacheTags(['user_list', 'node_list']);
		//$disable_cache->setCacheMaxAge(0);
		$response->addCacheableDependency($disable_cache);
		\Drupal::logger('rest')->notice('FooterFetchRestResource');
		return $response;
    }

}
