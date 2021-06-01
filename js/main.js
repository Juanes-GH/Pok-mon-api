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
const addCardPokemonContainer = document.querySelector('.pokemon-list')

btnCardPokemon.forEach(addCardbtn =>{
  addCardbtn.addEventListener('click', addCardClicked);
})

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
      `<div class=" col-xs-3 pokemon_5" id="pokemon5">
        <img  src=${pImg} alt="" class="imgPokemon5">
          <div class="infoPokemonMoves">
            <h1 class="NamePokemon-5">${pName}</h1>

            <h2 class="lifePokemon5" id="pokemon5Life">  100 </h2> 
            
            <h4 id="levelPokemon5">Level: ${pLevel}</h4>
            <h5 id="btn_pokemonAtack1" class="btn_atacks">${pMoves}</h5>
            <h6 id="btn_pokemonAtack2" class="btn_atacks">${pMoves_2}</h6>
          </div>
    </div>`;

  paintPokemon.innerHTML = paintPokemonContent
  
}
//--------------------------------------show the battleground-------------------//
 function showTheCam(){
   let div1 = document.getElementById('choosePokemon');
   let div2 = document.getElementById('container__turno');
   if(div1.style.display == 'block'){
      div2.style.display = 'none';
      div1.style.display = 'block';
   }else{
    div2.style.display = 'block';
    div1.style.display = 'none';
   };
 }
 //--------------------pokemon4--------------------------------------------//
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
//---------------------------Nametrainer-------------------------------------------//  
const $chosePlayerName    = document.getElementById('container__choose-playerName')
const $btnPlayer          = document.getElementById('PlayerName')
const $formName			      = document.getElementById('formName')
const $p1 				        = document.getElementById('p1')
const $txtPlayer 		      = document.getElementById('txtPlayerName')
const $playerName1 		    = document.getElementById('namePlayer1')
const $turno 			        = document.getElementById('container__turno')
const $chosePokemon       = document.querySelector('.choosePokemon')

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
//--------------------------pokemon battle----------------------------------------//
const $life_Div_MyPokemon         =   document.getElementById('pokemon5Life')
const $life_Div_EnemiPokemon      =   document.getElementById('life_Pokemon_4')
const btnBattle                   =   document.getElementById('btn_battle')
const $idPokemon_5                =   document.getElementById('pokemon5')
const $idPokemon_4                =   document.getElementById('pokemon-4')
const $battle_coments             =   document.getElementById('pokemonComet')
const $alertWinner                =   document.getElementById('alertWinner')
const $alertLoser                =   document.getElementById('alertLoser')


btnBattle.addEventListener('click', paint_restLive)

function paint_restLive(){
  const name_p1 = $idPokemon_5.querySelector("h1").textContent;
  const name_p2 = $idPokemon_4.querySelector("h1").textContent;

  paintComents(name_p1, name_p2)
}

function paintComents(name_p1, name_p2){

  let battletxt = $battle_coments.getElementsByTagName('p')[0]
  battletxt.textContent =`${"The first in attack is " + name_p1 }`;

  let battletxt_2 = $battle_coments.getElementsByTagName('p')[1]
  battletxt_2.textContent =`${name_p2 + " strikes back "}`
      
}

btnBattle.addEventListener('click', restLive)

function restLive(){ 

  let attackDamage =  Math.round(Math.random() * 80)
  let attackDamage_2 =  Math.round(Math.random() * 80)

  let pokemon1_Life = $idPokemon_5.querySelector("h2").textContent; // `${100 - attackDamage_2}`;
  
  let pokemon2_Life = $idPokemon_4.querySelector("h2").textContent; // `${100 - attackDamage}`

  let restLife_p4 = pokemon2_Life - `${attackDamage}`;
  let restLife_p5 = pokemon1_Life - `${attackDamage_2}`;
  paintTheResultOfTheAttacks(restLife_p4, restLife_p5)
}

function paintTheResultOfTheAttacks(restLife_p4, restLife_p5){

  let h2OfPokemon4 = document.querySelector('.lifePokemon4')
  let paintTheResultNumber_p4= 
  ` <h2 class="lifePokemon4" id="life_Pokemon_4">${restLife_p4}</h2> `
  h2OfPokemon4.innerHTML = paintTheResultNumber_p4

  let h2OfPokemon5 = document.querySelector('.lifePokemon5')
  let paintTheResultNumber_p5= 
  `<h2 class="lifePokemon5" id="pokemon5Life"> ${restLife_p5}</h2>`
  h2OfPokemon5.innerHTML = paintTheResultNumber_p5

  if(restLife_p4 <= 0){
    let prueba1 = document.querySelector('.alertWinner')
    let paintPrueba1 = 
    `<div class="alert alert-success" role="alert" id="alertWinner"">
    <h4 class="alert-heading">Well done!</h4>
    <p>Aww yeah, Yuo have win the game!!!</p>
    <hr>
    <p class="mb-0">Reload if your wont to play again</p>
  </div>`
    prueba1.innerHTML = paintPrueba1
  }else if(restLife_p5 <= 0){
    let prueba = document.querySelector('.alertLoser')
    let paintPrueba = 
    `<div class="alert alert-danger" role="alert" id="alertWinner" ">
    <h4 class="alert-heading">GAMER OVER!</h4>
    <p>Aww the nex time will be</p>
    <hr>
    <p class="mb-0">Reload if your wont to play again</p>
    </div>`
    prueba.innerHTML = paintPrueba
  }
}