//function to get a specific pokemon
async function getPokemom(id) {
    //call to api
    const response = await fetch(`https://pokeapi.co/api/v2/${id}/`)
    //when we got the response, we save it in const data
    const data = await response.json()
    //we return const data
    return data
}

async function init() {
    //we get the fist pokemon
    const fistPokemon = await getPokemom(150);
    //print the name of pokemon
    window.pokemon.textContent = fistPokemon.name
    //print the pokemon image
    window.image.setAttribute('src', fistPokemon.sprites.front_default)
}

init()