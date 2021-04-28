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

   let level = item.getElementsByTagName("h4")[0]
   level.textContent = pokemon.base_experience

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
  const pMoves_2 = pokemonsCards.querySelector("h6").textContent;
  const pLevel = pokemonsCards.querySelector("h4").textContent;
  paintChosenPokemon(pName, pImg, pMoves, pMoves_2, pLevel)
}


function paintChosenPokemon(pName, pImg, pMoves, pMoves_2, pLevel){
  const paintPokemon = document.querySelector('.pokemon-5')
  const paintPokemonContent = 
      `<div class=" col-xs-3 pokemon-5" id="pokemon5">
        <img  src=${pImg} alt="" class="imgPokemon5">
          <div class="infoPokemonMoves">
            <h1 class="NamePokemon-5">${pName}</h1>
            <p class="lifePokemonChosen">100%</p>
            <h4>Level: ${pLevel}</h4>
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

   let level = otherItem.getElementsByTagName("h4")[0]
   level.textContent = `${"Level: " + pokemon.base_experience}`

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
          swal(`Player ${turno}`)
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
//--------------------------pokemon winner battle--------------------------------------------------//
const pokemonL = document.getElementById('NamePokemon-5')
const pokemonR = document.getElementById('namePokemon-4')
const btnBattle = document.querySelector(".btnBattlePokemons")

const pA = document.getElementById('pokemon5')
const pB = document.getElementById('pokemonList4')
const level = document.getElementById('')

function ramdomWinner(pokemonWinnerName, pokemonWinnerName_2){
  if(pokemonWinnerName_2 <= pokemonWinnerName){
    alert("Well than, the winner is " + pokemonWinnerName);
  }else{
    alert("Ups...The winner was " + pokemonWinnerName_2 + " The nex time you will Win") ;
  }
}


btnBattle.addEventListener('click',addNamePokemonWinner)

function addNamePokemonWinner(){
  const infoP5 = document.getElementById("pokemon5");

  const infoP4 = document.getElementById("pokemon-4");

  const pokemonWinnerName = infoP5.querySelector("h4").textContent;

  const pokemonWinnerName_2 = infoP4.querySelector("h4").textContent;

  ramdomWinner(pokemonWinnerName, pokemonWinnerName_2)
} 
