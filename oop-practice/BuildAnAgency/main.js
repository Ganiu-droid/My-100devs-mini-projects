//Build an Agency


class Contractor{
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }

    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs`)
    }

    sayBye(){
        console.log(`I am pleased to meet you`)
    }
}

class Front extends Contractor{
    constructor(name,role,tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }

}
class Back extends Contractor{
    constructor(name,role,tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
    }

}


const machi = new Front('The machine', 'Front-End', 'React')
const simba = new Back('Ganiu', 'Back-End', 'Node')

let agentList = [machi, simba]

for(person of agentList){
    person.sayHello()
}
