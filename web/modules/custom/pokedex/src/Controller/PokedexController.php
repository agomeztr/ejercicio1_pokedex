<?php
namespace Drupal\pokedex\Controller;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Component\Utility\Xss;

class PokedexController extends ControllerBase {
  public function content() {
    //Create the content elements
    return [
      '#markup' => '
        <div id="pokedex">
            <img id = "photo-pokedex" src= "/sites/default/files/2026-04/plantilla_pokedex.png">
            <img id="photo-pokemon">
            <div id="all-pokemons"></div>
            <h2 id="pokemons">Pokemons</h2>
            <h2 id="name-pokemon"></h2>
            <section id="details" class="hidden">
                <span>
                    <h6>Nombre: </h6>
                    <p id="name"></p>
                </span>
                <span>
                    <h6>Id: </h6>
                    <p id="id"></p>
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
            <button id="right" type="button">Right</button>
            <button id="left" type="button">Left</button>
            <button id="previous" type="button">Previous</button>
            <button id="next" type="button">Next</button>
            <button id="backToList" type="button">Back</button>
        </div>
        ',
        '#attached' => [
            'library' => 'pokedex/pokedex',
        ],
        '#allowed_tags' => 
            array_merge(Xss::getHtmlTagList(), ['button', 'img', 'ul', 'h2', 'li', 'div', 'span', 'h6', 'p', 'section'])
    ];
  }
}

?>