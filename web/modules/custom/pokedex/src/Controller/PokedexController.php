<?php
namespace Drupal\pokedex\Controller;
use Drupal\Core\Controller\ControllerBase;

class PokedexController extends ControllerBase {
  public function content() {
    //Create the content elements
    return [
      '#markup' => '
        <div id="pokedex">
            <img id = "photo-pokedex" src= "/sites/default/files/2026-04/plantilla_pokedex.png">
            <img id="photo-pokemon">
            <button id"show-details">Detalles</button>
            <h2 id="name-pokemon"><h2>
            <section id="details">
                <h4>Detalles</h4>
                <span>
                    <h6>Nombre: </h6>
                    <p id="name"></p>
                </span>
                <span>
                    <h6>Tipos: </h6>
                    <ul id="types"></ul>
                </span>
                <span>
                    <h6>Altura: </h6>
                    <p id="height"></p>
                </span>
                <span>
                    <h6>Peso: </h6>
                    <p id="weight"></p>
                </span>
            </section>
            <button class="previous">Previous</button>
            <button class="next">Next</button>
        </div>
        ',
        '#attached' => [
            'library' => 'pokedex/pokedex',
        ],
    ];
  }
}

?>