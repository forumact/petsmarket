<?php

namespace Drupal\pigeonsworld\Helper;

use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;

/**
 *
 */
class PigeonsWorldHelper {

  /**
   *
   */
  public static function fetchImage($entity, $field_name, $image_style = 'product') {
    $result = NULL;
    $fid = $entity->{$field_name}->target_id;
    $file = (!empty($fid)) ? File::load($fid) : NULL;
    if (!empty($fid) && file_exists($file->getFileUri())) {
      $result = ImageStyle::load($image_style)
        ->buildUrl($file->getFileUri());
    }
    else {
      $default_image = $entity->{$field_name}->getSetting('default_image');
      if ($default_image && $default_image['uuid']) {
        $entity_repository = \Drupal::service('entity.repository');
        $defaultImageFile = $entity_repository->loadEntityByUuid('file', $default_image['uuid']);
        if ($defaultImageFile) {
          $result = ImageStyle::load($image_style)
            ->buildUrl($defaultImageFile->getFileUri());
        }
      }
    }

    return $result;
  }

  /**
   *
   */
  public static function resizeImage($file, $w, $h, $crop = FALSE) {
    list($width, $height) = getimagesize($file);
    $r = $width / $height;
    if ($crop) {
      if ($width > $height) {
        $width = ceil($width - ($width * abs($r - $w / $h)));
      }
      else {
        $height = ceil($height - ($height * abs($r - $w / $h)));
      }
      $newwidth = $w;
      $newheight = $h;
    }
    else {
      if ($w / $h > $r) {
        $newwidth = $h * $r;
        $newheight = $h;
      }
      else {
        $newheight = $w / $r;
        $newwidth = $w;
      }
    }

    // Get file extension.
    $exploding = explode(".", $file);
    $ext = end($exploding);

    switch ($ext) {
      case "png":
        $src = imagecreatefrompng($file);
        break;

      case "jpeg":
      case "jpg":
        $src = imagecreatefromjpeg($file);
        break;

      case "gif":
        $src = imagecreatefromgif($file);
        break;

      default:
        $src = imagecreatefromjpeg($file);
        break;
    }

    $dst = imagecreatetruecolor($newwidth, $newheight);
    imagecopyresampled($dst, $src, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);

    return $dst;

  }

  /**
   *
   */
  public static function saveImage($imageData, $filename) {
    // $filePath = file_create_url($defaultImageFile->getFileUri());
    // $filename = "one.jpg";
    // $resizedFilename = "one_80X160.jpg";
    // Get the data from a png file
    $defaultpath = \Drupal::service('file_system')->realpath(file_default_scheme() . "://") . '/product/' . $filename;
    $quality = 0;
    imagepng($imageData, $defaultpath, $quality);
    return 'http://pigeonsworld.local/sites/default/files/product/' . $filename;
  }

}
