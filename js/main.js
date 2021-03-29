function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
 console.log(getRandomInt(1, 151));

const bringData = (id) =>{
        fetch(`https://pokeapi.co/api/v2/${id}`)
        .then= (res => res.json())
        .then(data => {
            bringData.innerHTML = `
                    <img src = "${data.results['0'].picture.large}"`
        
    })
    
}

const paintCart = (pokemon) => {
    console.log(pokemon)
    const cPokemon1 = getSelection
  
}