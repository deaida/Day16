// Only change code below this line
class Microsoft{
    constructor(name){
        this._name=name;
    }
    get name(){
return this._name;
    }
    set name(NewName) {
return this._name=Newname;
    }
    occupation() {
        
 return  `${this._name} is a philantropist! `; //????
    }
}
class Facebook extends Microsoft{
    constructor(name,age){
        super(name)
        this._age=age;
    }
   studentAge(){
       return  `${this._name} is ${this._age} `; //???
   }
}
const henry=new Microsoft("William Henry Gates III");
console.log(henry.occupation())
const elliot= new Facebook("Mark Elliot Zuckerberk", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());
// Only change code above this line
module.expors = {
    Microsoft,
    Facebook
}