const button = document.querySelector('button');

button.onclick = function() {
  let name = prompt("Can you say your pokemon trainer ID?");
  alert('¡Hi ' + name + ', nice to meet you!');
}
//-------botton-------//

let list = document.getElementById("listPokemon")


function callPokemo(id, num) {
    fetch('https://pokeapi.co/api/v2/pokemon/${id}')
    .them(function (response) {
        response.json()
        .them((pokemon) => {
                creatPokemon(pokemon, num);
            })
    })
}

function callPokemons() {
    let fristId = Math.round(Math.random() * 150);
    let secoundId = Math.round(Math.random() * 150);
    callPokemo(fristId);
    callPokemo(secoundId);
}
callPokemons()
