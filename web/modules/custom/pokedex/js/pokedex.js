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
        //list the pokemons
        listTenPokemons();
        //show the pokemon
        showPokemon();
    })

    //function to list the first 10 pokemons
    function listTenPokemons(){
        const list = listPokemons.slice(0, 10);
        console.log(list);
    }

    //Get the name from the main page
    let pokemonName = document.getElementById("name-pokemon");
    let name = document.getElementById("name");
    //get the image from main page
    let photo = document.getElementById("photo-pokemon");
    //get the next button
    let next = document.getElementById("next");

    /*//function to increase the index
    next.addEventListener("click", () => {
        index++;
    })*/

    //get the pokemon details
    //get the id from the main page
    let id = document.getElementById("id");
    let types = document.getElementById("types");
    //get the height from the main page
    let height = document.getElementById("height");
    //get the weight from the main page
    let weight = document.getElementById("weight");

    //call to the pokemon url details
    fetch("https://pokeapi.co/api/v2/pokemon/" + (index + 1) + "/")
    .then(response => response.json())
    .then(data => {
        //save the details
        console.log(data);
        id.textContent = data.id;
        //go across the data types
        data.types.forEach(type => {
            //create a li for every types that data has
            let list = document.createElement("li");
            list.textContent = type.type.name[0].toLocaleUpperCase() + type.type.name.slice(1);;
            types.appendChild(list);
        });
        height.textContent = data.height
        weight.textContent = data.weight;
    })

    //function to show the pokemon in the pokedex
    function showPokemon(){
        //get the first pokemon
        const pokemon = listPokemons[index];
        //print the pokemon's name with the first letter in capital
        pokemonName.textContent = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
        name.textContent = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
        //print the image
        photo.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + (index + 1) + ".png";
    }
})