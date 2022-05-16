//Api fetch from pokemon.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url =`https://api.nasa.gov/planetary/apod?api_key=yAdbdF2lXz2uGi448ySNGltw02WJfs9mgblbxvyb&date=${choice}` 
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(choice)
        console.log(data)
        if(data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
        }
        else{
            document.querySelector('iframe').src = data.url
        }
        document.querySelector('h3').innerText = data.explanation
    })

    .catch(err =>{
        console.log(`error ${err}`)
    });

}

