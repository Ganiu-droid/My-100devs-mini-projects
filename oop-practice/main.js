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