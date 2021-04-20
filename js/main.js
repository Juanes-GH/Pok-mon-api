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
    
    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
    consultarPokemon(thirdId, 3)
 
  }
 
 function crearPokemon(pokemon, num){
   let item = lista.querySelector(`#pokemon-${num}`)
   
   let imagen = item.getElementsByTagName("img")[0]
   imagen.setAttribute("src", pokemon.sprites.front_default)
   
   let nombre = item.getElementsByTagName("p")[0]
   nombre.textContent = pokemon.name

 }
 consultarPokemones()
//---------------------------------------botton pokemon-------------------------------------------------------//

const $poekonCard = document.getElementById('pokemon-1')
const $selecPokemon = document.getElementById('selectedPokemon')
let pokemonselect = {}

 $poekonCard.addEventListener('click', e =>{
   addPokemon(e)
 })

 const addPokemon = e =>{
  if(e.target.classList.contains('btnPokemonPiker')){
    setpokemon(e.target.parentElement)
  }
  e.stopPropagation()
}
const setpokemon = Object =>{
  const pokemon ={
    name: Object.querySelector("p").textContent,
    img: Object.querySelector("img")
  }
  console.log(pokemon)
}

 //---------------------------------------pokemon4---------------------------------------------------------//
 let newList = document.getElementById("pokemonList4")

 function consoultPokemon(id, name, stats){
   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
   .then(function (response){
      response.json()
    .then(function(pokemon){
      callPokemon(pokemon, name, stats)
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
  //pokemon.stats[1].base_start
  consoultPokemons()
//---------------------------Nametrainer-------------------------------------------------//  
  const $chosePlayerName  = document.getElementById('container__choose-playerName')
  const $btnPlayer      = document.getElementById('PlayerName')
  const $formName			= document.getElementById('formName')
  const $p1 				= document.getElementById('p1')
  const $txtPlayer 		= document.getElementById('txtPlayerName')
  const $playerName1 		= document.getElementById('namePlayer1')
  const $turno 			= document.getElementById('container__turno')
  const $chosePokemon = document.getElementById('choosePokemon')

  var namePlayer1
  var turno   = 1

$btnPlayer.addEventListener('click', playerName)
$btnPlayer.addEventListener('click', accept)


$formName.addEventListener('submit', (ev) => {
  ev.preventDefault()
  playerName()
})
  function empezar(){
    $chosePlayerName.classList.toggle('choosePlayerName')
    setTimeout(() => $p1.classList.toggle('indicator'), 500)
  }

function playerName(){
  switch(turno){
      case 1:
          if($txtPlayer.value == '') {
            swal('Elije tu nombre de maestro Pokemon', `Player ${turno}, debes ingresar un nombre de usuario`, 'warning')
          }else{
            namePlayer1 = $txtPlayer.value
            $playerName1.innerHTML = namePlayer1
            $txtPlayer.value = ''
            turno++
            $p1.classList.toggle('indicator')
          }
      break
  }
}
function accept(){
  $chosePlayerName.classList.toggle('start')
  $chosePokemon.classList.toggle('choosePokemon')
}
//-------------------select the pokemon-----------------------------------------------------------//

document.getElementById('pokemon-3')
  .addEventListener('submit', function pokemonF() {
    document.getElementById('img').value
  })