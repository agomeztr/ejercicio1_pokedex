<?php
namespace Drupal\pokedex\Controller;
use Drupal\Core\Controller\ControllerBase;

class PokedexController extends ControllerBase {
  public function content() {
    $newVariable = "Hola mundo";
    return [
      '#markup' => $newVariable,
    ];
  }
}

?>