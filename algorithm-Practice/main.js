/*Given two interger integer arrays a, b both of length >= 1, 
create a program that returns true if the sum of the squares 
of each element in a is strictly greater than the sum of the 
cubes of each element in b */

// function arrSum(a){
//     a.forEach (el => {
//         let result = 0
//         result += el**2
//         console.log(result) 
//     })
// }
// arrSum([1,2,3])


function compareSquareAndCube(a,b){
    const trueOrFalse =  a.reduce((acc, c) => acc + c**2, 0) > b.reduce((acc,c) => acc + c**3, 0)
    console.log(trueOrFalse)
}

//compareSquareAndCube([2,2,2], [2,2,2])

//find the average of numbers in an array

function findAverageOfArray(arr){
    return average = (arr.reduce( (acc,c) => acc + c ))/arr.length
}

//console.log(findAverageOfArray([5,5,4,4,5])) 


//Return a new array consisting of elements whidh are multiples of their own index in index array (length > 1)
// Filter graps the array, element, index
//Note the filter returns an array just as map
//Filter filters the array based on the specified condition in the callback function
function isMultiple(arr){
    return arr.filter((e, i) => e % i === 0)
}
// console.log(isMultiple([22, 42, 34, 24, 16, 29])) 


//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were 
//mumbers. Return your answer as a number

function sumArr(arr){
   return arr.reduce((acc, c) => acc + Number(c), 0)
}
//this can be simplified as this:

const s = r => r.reduce( (a,c) => +a + +c ) //the pre plus before 'a' and 'c' converts them to a number

console.log(sumArr(['3', 2, '5', '4']))

//Practice Oop

function calculateProfit(costPrice, sellingPrice){
    this.costPrice = costPrice
    this.sellingPrice = sellingPrice

    
}