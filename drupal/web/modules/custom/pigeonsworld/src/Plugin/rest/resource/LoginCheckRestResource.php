<?php

namespace Drupal\pigeonsworld\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\ModifiedResourceResponse;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Drupal\user\Entity\User;
use Drupal\file\Entity\File;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "login_check_rest_resource",
 *   label = @Translation("Login check rest resource"),
 *   uri_paths = {
 *     "create" = "/api/v1/logincheck"
 *   }
 * )
 */
class LoginCheckRestResource extends ResourceBase {

    /**
     * A current user instance.
     *
     * @var \Drupal\Core\Session\AccountProxyInterface
     */
    protected $currentUser;

    /**
     * Constructs a new LoginCheckRestResource object.
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

        $status = [];
        
		
        if(isset($payload['profileObj'])){
            if($payload['profileObj']['email']){
              $result = user_load_by_mail($payload['profileObj']['email']);
              if($result){				 
                $status['status'] = 'User Exists';
              }else{

                $pathinfo = basename($payload['profileObj']['imageUrl']);
                //$target = $pathinfo['filename'].'.'.$pathinfo['extension'];
                $destination = "public://pictures/$pathinfo";				
                $rr = system_retrieve_file($payload['profileObj']['imageUrl'], $destination, FALSE, FILE_EXISTS_RENAME);
				$data = file_get_contents($payload['profileObj']['imageUrl']);
                $file = file_save_data($data, $destination, FILE_EXISTS_REPLACE);
                				
				$file = File::create([
				  'uri' => $destination,
				]);
				$file->save();

                $user = User::create();
                $user->setPassword('Sample');
                $user->enforceIsNew();
                $user->setEmail($payload['profileObj']['email']);
                $user->setUsername($payload['profileObj']['givenName']);
                $user->set("field_first_name", $payload['profileObj']['name']);
                $user->set("field_last_name", $payload['profileObj']['familyName']);
                $user->user_picture->setValue(['target_id' => $file->id()]);
                $user->activate();
                // Save user.
                $user->save();
                $user = User::load($user->id());
                user_login_finalize($user);
                $status['status'] = 1;
              }
            }
        }

        return new ModifiedResourceResponse($status, 200);
    }

}
