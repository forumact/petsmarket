<?php

namespace Drupal\pigeonsworld\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class DefaultController.
 */
class DefaultController extends ControllerBase {

  /**
   * Importfromwiki.
   *
   * @return array
   *   Return Hello string.
   */
  public function importFromWiki() {
    $endPoint = "https://ta.wikipedia.org/w/api.php";
    $params = [
      "action" => "parse",
      "page" => "புறா_வகைகளின்_பட்டியல்",
      "format" => "json",
    ];

    $url = $endPoint . "?" . http_build_query($params);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $output = curl_exec($ch);
    curl_close($ch);
    $result = json_decode($output, TRUE);
    $data = $result["parse"]["text"]["*"];
    preg_match_all('/<a .*?>(.*?)<\/a>/', $data, $matches);

    $need = array_filter($matches[1]);

    foreach ($need as $key => $one) {
      if (strip_tags($one) != $one) {
        unset($need[$key]);
      }
      if (strpos($one, '&#91') !== FALSE) {
        unset($need[$key]);
      }
      if ($one == 'தொகு') {
        unset($need[$key]);
      }
    }
    $needrest = array_values($need);
    $result = array_splice($needrest, 0, 135);

    if (!empty($result)) {
      return $build['content'] = [
        '#type' => 'item',
        '#markup' => '<pre>' . print_r($result, TRUE),
      ];
    }
    return $build['content'] = [
      '#type' => 'item',
      '#markup' => 'Check your internet connections',
    ];

    /*foreach($result as $key => $val){
    $node = Node::create([
    'type'        => 'blog',
    'title'       => $val,
    ]);
    $node->save();
    }*/
  }

  /**
   * Importfromwiki.
   *
   * @return array
   *   Return Hello string.
   */
  public function importFromWikiEn() {
    $endPoint = "https://ta.wikipedia.org/w/api.php";
    $params = [
      "action" => "parse",
      "page" => "List_of_pigeon_breeds",
      "format" => "json",
    ];

    $url = $endPoint . "?" . http_build_query($params);

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    $output = curl_exec($ch);
    curl_close($ch);
    $result = json_decode($output, TRUE);
    $data = $result["parse"]["text"]["*"];
    preg_match_all('/<a .*?>(.*?)<\/a>/', $data, $matches);

    $need = array_filter($matches[1]);

    foreach ($need as $key => $one) {
      if (strip_tags($one) != $one) {
        unset($need[$key]);
      }
      if (strpos($one, '&#91') !== FALSE) {
        unset($need[$key]);
      }
      if ($one == 'தொகு') {
        unset($need[$key]);
      }
    }

    $needrest = array_values($need);
    $result = array_splice($needrest, 0, 135);

    if (!empty($result)) {
      return $build['content'] = [
        '#type' => 'item',
        '#markup' => '<pre>' . print_r($result, TRUE),
      ];
    }

    // Foreach ($result as $key => $val) {
    //      $node = Node::create([
    //        'type' => 'blog',
    //        'title' => $val,
    //      ]);
    //      $node->save();
    //    }
    return $build['content'] = [
      '#type' => 'item',
      '#markup' => 'Check your internet connections',
    ];

  }

}
