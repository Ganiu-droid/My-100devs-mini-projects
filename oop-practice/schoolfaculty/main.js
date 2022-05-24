//Create a Faculty class
class Faculty{
    constructor(name, location, head){
        this._name = name
        this._location = location
        this._head = head
    }

    get name(){
        return _name
    }
    get location(){
        return this._location
    }
    get head(){
        return this._location
    }

    studentAdmission(){
        console.log(`The Faculty of ${this.name} is now admitting students. 
        Registraton is at ${this.location}. See ${this.head} for details`)
    }
}


class Engineering extends Faculty{
    constructor(equipment, name, location, head){
        super(name, location, head)
        this.equipment = equipment
    }

    welcomeMessage(){
        console.log(`Welcome to the Faculty of ${this.name}. You have access to ${equipment} for your Engineering project`)
    }
    
}
class Agriculture extends Faculty{
    constructor(equipment, name, location, head){
        super(name, location, head)
        this.equipment = equipment
    }

    welcomeMessage(){
        console.log(`Welcome to the Faculty of ${this.name}. You have access to ${equipment} for your Agricultural project`)
    }

}
class Law extends Faculty{
    constructor(equipment, name, location, head){
        super(name, location, head)
        this.equipment = null
    }

    welcomeMessage(){
        console.log(`Welcome to the Faculty of ${this.name}. You have access to ${equipment} for your Court project`)
    }

}