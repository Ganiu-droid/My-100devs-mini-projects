/*const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
fetch(url)
.then( res => res.json )
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
}) */


const fetchData = async () =>{
    const url = "https://v2.jokeapi.dev/joke/Any?safe-mode"
     const res = await fetch(url)
    const data = await res.json() 
    console.log(data)
}

fetchData()


