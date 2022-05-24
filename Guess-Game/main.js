/* 
The requirements:

===>User story: A user can enter a number
===>User story: The system picks a random number from 1 to 6
===>User story: If the user's number is equal to a random number, give the user 2 points
===>User story: If the user's number is different than the random number by 1,
    give the user 1 point. Otherwise, give the user 0 points
===>User story: The user can play the game as long as they want to


*/

//Collect your user entry
const enterNumber = () => {
    return new Promise( (resolve, reject) =>{
        const userNumber = Number(window.prompt('Enter a number from 1-6'))
        const randomNumber = Math.floor(Math.random() * 6 + 1)

        if(isNaN(userNumber)) {
            reject(new Error("Wrong input type")) //if the user enters a value that is not a number

        }

        if(userNumber === randomNumber){
            resolve( {point: 2, randomNumber} ) // return 2 point
        }

        else if(userNumber === randomNumber + 1 || userNumber === randomNumber -1) {
            resolve( {point : 1, randomNumber} ) // return 1 point
            
        }
        else {
            resolve( {point : 0, randomNumber } ) //return zero point
        }

    } )
}
// In case user want to play another round
const continueGame = () => {
    return new Promise((resolve) => {
        if(window.confirm('Do you want to continue?')) //ask if user want to continue playing
        resolve(true)
        else{
            resolve(false)
        }
    } )
}

//handle the user guess
const handleGuess = async () => {
    try {
        const result = await enterNumber() //this return a promise dealing with what the user entered
        window.alert(`Dice: ${result.randomNumber} you got ${result.point} `)
            
            // Find out if the user wants to play again
            const iscontinuing = await continueGame()

            if(iscontinuing){
                handleGuess()
            }
            else{
                window.alert("Game Ends")
            }
            
        }
        catch (error) {
            alert(error)
        }
    }

handleGuess()

