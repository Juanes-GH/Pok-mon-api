let lista = document.getElementById("listaPokemon")


function consultarPokemon(id, num){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
      response.json()
      .then(function(pokemon){
        crearPokemon(pokemon, num)
      })
    })
  
}


  function consultarPokemones() {
    let primerId = Math.round(Math.random()* 150)
    let segundoId =  Math.round(Math.random() * 150)
    let thirdId =  Math.round(Math.random() * 150)
    //let fourthId =  Math.round(Math.random() * 150)
    
    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
    consultarPokemon(thirdId, 3)
    //consultarPokemon(fourthId, 4)
    
 
  }
 
 function crearPokemon(pokemon, num){
   let item = lista.querySelector(`#pokemon-${num}`)
   
   let imagen = item.getElementsByTagName("img")[0]
   imagen.setAttribute("src", pokemon.sprites.front_default)
   
   let nombre = item.getElementsByTagName("p")[0]
   nombre.textContent = pokemon.name

 }
 consultarPokemones()
 //-------------------------------------------------botton---------------------------------------------------------//
 let newList = document.getElementById("pokemonList4")

 function consoultPokemon(id, name){
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then(function (response){
      response.json()
    .then(function(pokemon){
      callPokemon(pokemon, name)
    })
   })
 }
  function consoultPokemons(){
    let fourthId =  Math.round(Math.random() * 150)

    consoultPokemon(fourthId, 4)
  }

  function callPokemon(pokemon, num){
    let otherItem = newList.querySelector(`#pokemon-${num}`)
    let img = otherItem.getElementsByTagName("img")[0]
    img.setAttribute("src", pokemon.sprites.front_default)
    let name = otherItem.getElementsByTagName("p")[0]
    name.textContent = pokemon.name
  }
  consoultPokemons()