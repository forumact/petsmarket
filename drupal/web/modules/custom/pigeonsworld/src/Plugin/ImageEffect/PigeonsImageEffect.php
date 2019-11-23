<?php

namespace Drupal\pigeonsworld\Plugin\ImageEffect;

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Image\ImageInterface;
use Drupal\image\ConfigurableImageEffectBase;

/**
 * Provides a 'PigeonsImageEffect' image effect.
 *
 * @ImageEffect(
 *  id = "pigeons_image_effect",
 *  label = @Translation("Resize with Ratio"),
 *  description = @Translation("Resize with Ratio")
 * )
 */
class PigeonsImageEffect extends ConfigurableImageEffectBase {

  /**
   * {@inheritdoc}
   */
  public function applyEffect(ImageInterface $image) {
    // Implement Image Effect.
    $cwidth = $this->configuration['width'];
    $cheight = $this->configuration['height'];

    $owidth = $image->getWidth();
    $oheight = $image->getHeight();

    $r = $owidth / $oheight;

    if ($cwidth / $cheight > $r) {
      $newwidth = $cheight * $r;
      $newheight = $cheight;
    }
    else {
      $newheight = $cwidth / $r;
      $newwidth = $cwidth;
    }

    if (!$image->resize($newwidth, $newheight)) {
      $this->logger->error('Resize with Ratio failed using the %toolkit toolkit on %path (%mimetype, %dimensions)', ['%toolkit' => $image->getToolkitId(), '%path' => $image->getSource(), '%mimetype' => $image->getMimeType(), '%dimensions' => $image->getWidth() . 'x' . $image->getHeight()]);
      return FALSE;
    }
    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'width' => NULL,
      'height' => NULL,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['width'] = [
      '#type' => 'number',
      '#title' => t('Width'),
      '#default_value' => $this->configuration['width'],
      '#field_suffix' => ' ' . t('pixels'),
      '#required' => TRUE,
      '#min' => 1,
    ];
    $form['height'] = [
      '#type' => 'number',
      '#title' => t('Height'),
      '#default_value' => $this->configuration['height'],
      '#field_suffix' => ' ' . t('pixels'),
      '#required' => TRUE,
      '#min' => 1,
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    $this->configuration['height'] = $form_state->getValue('height');
    $this->configuration['width'] = $form_state->getValue('width');
  }

}
