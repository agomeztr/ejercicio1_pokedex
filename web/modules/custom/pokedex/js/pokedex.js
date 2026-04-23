document.addEventListener("DOMContentLoaded", () => {
    //create an array to save all the pokemons
    let listPokemons = [];
    //create an index to navigate between pokemons
    let index = 0;
    //create a variable to change the page
    let page = 1;
    //create a variable to indicate the number of pokemons to show
    const quantity = 10;
    //create a variable to save the total pages
    let totalPages = 0;

    //call to the api
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => {
        //save the data results (result in json api)
        listPokemons = data.results;
        console.log(data.results);
        //get the total of pages
        totalPages = Math.ceil(listPokemons.length / quantity);
        console.log(totalPages);
        //list the pokemons
        listTenPokemons();
    })

    //get the div from the main page
    let tenPokemons = document.getElementById('all-pokemons');

    //function to list the first 10 pokemons
    function listTenPokemons(){
        tenPokemons.innerHTML = '';
        //get the first position of the slice
        let initial = (page - 1) * quantity;
        //get the last position of the slice
        let end = initial + quantity;
        //slice to list only 10 pokemons in page
        let list = listPokemons.slice(initial, end);
        //array to print the ten pokemon
        list.forEach(p => {
            //create a button for each pokemon
            let poke = document.createElement("button");
            poke.id = 'btn-' + p.name;
            poke.className = 'button-poke';
            poke.textContent = p.name[0].toLocaleUpperCase() + p.name.slice(1);;
            tenPokemons.appendChild(poke);
            console.log(poke.id);
            //add and event to pass the id to view details
            let btn = document.getElementById('btn-' + p.name);
            btn.addEventListener("click", () => {
                //find the pokemon of the list that user click
                let pokemonToShow = list.find(({name}) => name === p.name);
                //get the id od the pokemon
                let id = pokemonToShow.url.split("/")[6];
                console.log(id);
                showPokemon(id);
            })
        })
        console.log(list);
    }

    //Get the name from the main page
    let pokemonName = document.getElementById("name-pokemon");
    let name = document.getElementById("name");
    //get the image from main page
    let photo = document.getElementById("photo-pokemon");
    //get the pokemon details
    //get the id from the main page
    let pokemonId = document.getElementById("id");
    let types = document.getElementById("types");
    //get the height from the main page
    let height = document.getElementById("height");
    //get the weight from the main page
    let weight = document.getElementById("weight");
    //get the buttoms
    //get the next button
    let next = document.getElementById("next");
    //get the previous button
    let previous = document.getElementById('previous');
    //get the right button
    let right = document.getElementById('right');
    //get the left button
    let left = document.getElementById('left');

    //function to increase the index
    next.addEventListener("click", () => {
        index++;
        //print again the pokemon with the new id
        showPokemon();
        console.log("Click");
    })

    //function to decrease the index
    previous.addEventListener("click", () => {
        index--;
        //print again the pokemon with the new id
        showPokemon();
    })

    //function to increse the list of ten pokemons
    right.addEventListener("click", () => {
        //to asure the number of page it's not up to maximum
        if(page < totalPages){
            page++;
        } 
        listTenPokemons();
        console.log(page);
    })

    //function to decrease the list of ten pokemons
    left.addEventListener("click", () => {
        //to asure the number of page it's not down to minimum
        if(page > 1){
            page--;
        } 
        listTenPokemons();
        console.log(page);
    })

    //function to show the pokemon in the pokedex
    function showPokemon(id){
        //delete the data from ul of types
        types.innerHTML = '';
        //get the pokemon
        const pokemon = listPokemons[id - 1];
        //print the pokemon's name with the first letter in capital
        pokemonName.textContent = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
        name.textContent = pokemon.name[0].toLocaleUpperCase() + pokemon.name.slice(1);
        //print the image
        photo.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
        //print the id of the pokemon
        pokemonId.textContent = id;
        console.log(id);
        //call to the pokemon url details
        fetch("https://pokeapi.co/api/v2/pokemon/" + (id) + "/")
        .then(response => response.json())
        .then(data => {
            //save the details
            console.log(data);
            //go across the data types
            data.types.forEach(type => {
                //create a li for each type that data has
                let list = document.createElement("li");
                list.textContent = type.type.name[0].toLocaleUpperCase() + type.type.name.slice(1);;
                types.appendChild(list);
            });
            height.textContent = data.height
            weight.textContent = data.weight;
        })
    }
})