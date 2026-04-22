document.addEventListener("DOMContentLoaded", () => {
    //create an array to save all the pokemons
    let listPokemons = [];
    //create an index to navigate between pokemons
    let index = 0;

    //call to the api
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => {
        //save the data results (result in json api)
        listPokemons = data.results;
        console.log(data.results);
        //show the pokemon
        showPokemon();
    })

    //Get the name from the main page
    let pokemonName = document.getElementById("name-pokemon");
    //get the image from main page
    let photo = document.getElementById("photo-pokemon");
    //get the next button
    let next = document.getElementById("next");

    //function to increase the index
    next.addEventListener("click", () => {
        index++;
    })

    //function to show the pokemon in the pokedex
    function showPokemon(){
        const pokemon = listPokemons[index];
        pokemonName.textContent = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
        photo.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png";
    }
})