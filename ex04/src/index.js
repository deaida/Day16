// Only change code below this line
class Pets{
    constructor(name, legs){
        this._name=name;
        this._legs=legs;
    }
        walk(){
            let numberOfLegs= 4;
            return this._name "is walking on" numberOfLegs "legs");
        
        }
}
class Dog extends Pets{
super(name,legs)
bark(){
    let dogSay= "WAUF-WAUF";
    return this._name "says" dogSay ;
}

}
console.log(numberOfLegs,dogSay);

// Only change code above this line

let dog = new Dog("Pujdo", 4);
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}
