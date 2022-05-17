//create an espresso machine class that makes machines with 4 properties and 3 methods

class EspressoMachine{
    constructor(color,make, model, price) {
        this.model = model
        this.color = color
        this.make = make
        this.price = price
    }
    brew(){
        console.log('Its summer sales')
    }
    turnOn = () => {console.log('turn on the machine')}
    steam() {
        console.log('Its summer sales')
    }   

}

let gaggia = new EspressoMachine('red', 'Goggia', 'Classic Pro', 400)

//writing codes to oop standard

class Animal{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}
//A child class extending from Animal
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed
    }
}

// A Bird child class that extends Animals
class Bird extends Animal {
    constructor(name, breed, feed){
        super(name)
        this.breed
        this.feed
    }
}
// A Cat child class that extends Animals
class Cat extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }
    speak(){
        console.log('MEOW')
    }
}
let simba = new Dog("Simba", 'Sheperd')
let fatChicken = new Bird('Fatty', 'broiler', 'grower')

//Using getters and setters:
class Animals {
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}
//A Dog child class exptending Animal class
class Dog extends Animal {
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} barks`)
    }
}
//A Dog child class exptending Animal class
class Cat extends Animal {
    constructor(name, breed){
        super(name)
        this._breed = breed
    }
    speak(){
        super.speak()
        console.log(`${this.name} meow`)
    }
}

let chancha = new Dog('chancha', 'Shepard')
let machi = new Dog('machi', 'German shepard')
let musu = new Cat('Musu', 'American short hair')