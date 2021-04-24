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
   
   let nombre = item.getElementsByTagName("h1")[0]
   nombre.textContent = pokemon.name
   
   let skills = item.getElementsByTagName("h5")[0]
   skills.textContent = pokemon.moves[0].move.name

   let skills_2 = item.getElementsByTagName("h6")[0]
   skills_2.textContent = pokemon.moves[1].move.name

 }
consultarPokemones()
//--------------------------------------pokemon chosen-------------------------------------------------------//
const btnCardPokemon = document.querySelectorAll(".btnPokemonPiker")
btnCardPokemon.forEach(addCardbtn =>{
  addCardbtn.addEventListener('click', addCardClicked);
})

const addCardPokemonContainer = document.querySelector('.pokemon-list')

function addCardClicked(ev){
  const button = ev.target;
  const pokemonsCards = button.closest('.pokemonsCards')
  
  const pName = pokemonsCards.querySelector("h1").textContent;
  const pImg = pokemonsCards.querySelector("img").src;
  const pMoves = pokemonsCards.querySelector("h5").textContent;
  const pMoves_2 = pokemonsCards.querySelector("h6").textContent
  paintChosenPokemon(pName, pImg, pMoves, pMoves_2)
}


function paintChosenPokemon(pName, pImg, pMoves, pMoves_2){
  const paintPokemon = document.querySelector('.pokemon-5')
  const paintPokemonContent = 
      `<div class="pokemon-5" id="pokemon5">
        <img  src=${pImg} alt="" class="imgPokemon5">
          <div class="infoPokemonMoves">
            <h1 class="NamePokemon-5">${pName}</h1>
            <p class="lifePokemonChosen">100%</p>
            <h5>${pMoves}</h5>
            <h6 class="pokemonSkills">${pMoves_2}</h6>
          </div>
    </div>`;

  paintPokemon.innerHTML = paintPokemonContent
  
}

 //---------------------------------------pokemon4---------------------------------------------------------//
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
    
    let name = otherItem.getElementsByTagName("h1")[0]
    name.textContent = pokemon.name

    let skills = otherItem.getElementsByTagName("h5")[0]
   skills.textContent = pokemon.moves[0].move.name

   let skills_2 = otherItem.getElementsByTagName("h6")[0]
   skills_2.textContent = pokemon.moves[1].move.name

  }
  
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
//---------------------------battle--------------------------------------------------//
const yourPokemon = document.getElementById('pokemon5')
const pokemonEnmy = document.getElementById('pokemon-4')
//const tuno a = yourPokemon
//const tuno b = pokemonEnmy

function battlePokemon(){
 let battle =  Math.round(Math.random() * 2)

 console.log(battle)
}
