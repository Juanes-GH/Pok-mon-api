
const $pokemonimg = document.querySelector('#pokemonimg')
function renderPokemon(image){
  $pokemonimg.setAttribute('scr', image)
}


fetch('https://pokeapi.co/api/v2/pokemon/25/')
  .then(response => response.json())
  .then(pokemon => {
    renderPokemon(pokemon.sprites.front_default)
  })
