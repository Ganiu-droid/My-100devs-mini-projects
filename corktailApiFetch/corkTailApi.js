//A corktail api 

// fetch("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
fetch("https://jsonplaceholder.typicode.com/photos")
.then(res => res.json())
.then(data =>{
    console.log(data)
})
.catch(err =>{
    console.log(`error ${err}`)
})