//Stopwatch Objedct
let stopWatch = {};
stopWatch.currentTime = 12;

stopWatch.tellTime = function(time){
    console.log(`The current time is ${time}`)
}
stopWatch.tellTime(stopWatch.currentTime)


let time = new Date();
let year = time.getFullYear()
let month = time.getMonth()
let dayName = time.getDay()
let hour = time.getHours()
let min = time.getMinutes()
let sec = time.getSeconds()

console.log(year, month, dayName, hour, min, sec)

console.log(stopWatch);

//Create a Pizza OBJECT THAT HAS FOUR PROPERTIES AND THREE METHODS
let pizza = {}

pizza.shape = 'round'
pizza.sauce = sauce
pizza.size = 'large'
pizza.toppings = ['spinach', 'onion', 'jalapenos', 'banana peppers', 'garlic']
pizza.crust = 'stuffed'
pizza.estimatedDeliveryTime = function(){
    console.log("Calculating....")
}

pizza.burnMouth = function(){
    console.log('dfdfdfdfddaeqeha')
}

pizza.frisbee = function(){
    console.log('Yeeeeettttt')
}

//Create a pizza object using a constructor function
function MakePizza(sauce, size, toppings, crust){
    this.sauce = this.sauce
    this.size = size
    this.toppings = toppings
    this.crust = crust

    this.estimatedDeliveryTime = () =>{
        console.log('calculating...')
    }
    this.burnMouth = () =>{
        console.log('agasdftwqtreahd')
    }

    this.friesbee = () =>{
        console.log('Yyyyeeeeetttttt')
    }
}
// create instances of constructor function
let pizzaOne = new MakePizza('round', 'large', 'spinach', 'stuffed')
let pizzaTwo = new MakePizza('round', 'large', 'spinach', 'stuffed')

console.log(pizzaOne)


