// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout( () =>{ console.log('Paper delivered to house 2') }, 3000 )
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }

// houseOne()
// houseTwo()
// houseThree()


// const promise = new Promise( (resolve, reject) => {
//     const error = true;
//     if(!error) {
//         resolve("There is no error")
//     }
//     else{
//         reject('Promise is rejected')
//     }
// } )

//console.log(promise)

//Using Promise to write asychronous codes
//House 1,2,3 analogy
const houseOne = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house One')
        }, 1000);
    } )
}
const houseTwo = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house two')
        }, 5000);
    } )
}
const houseThree = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house three')
        }, 2000);
    } )
}

// houseOne()
// .then(data => console.log(data))
// .then(houseTwo)
// .then(data => console.log(data))
// .then(houseThree)
// .then(data => console.log(data))
// .catch(err => console.log(err) )


// const houseOne = async  () => {
//     setTimeout(() => {
//         console.log('Paper delivered to house One')
//     }, 1000);

// }
// const houseTwo = async () => {
//     setTimeout(() => {
//         console.log('Paper delivered to house two')
//     }, 5000);

// }
// const houseThree = async () => {
//     setTimeout(() => {
//         console.log('Paper delivered to house three')
//     }, 2000);
// }


const getPaid = async () => {
    const houseOneWait = await houseOne()
    const houseTwoWait = await houseTwo()
    const houseThreeWait = await houseThree()
    console.log(houseOneWait)
    console.log(houseTwoWait)
    console.log(houseThreeWait)
}

//getPaid()

//Using async and await to handle an API Fetch

const getAcuteDogPhoto = async () => {
    url = `https://dog.ceo/api/breeds/image/random`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
}

getAcuteDogPhoto()


