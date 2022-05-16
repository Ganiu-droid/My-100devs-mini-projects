//Api fetch from pokemon.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value.toLowerCase()
    const url = 'https://pokeapi.co/api/v2/pokemon/'+choice


    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

}
