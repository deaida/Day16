// only change code below this line
class Person{
    
    static display() {
        message="Static method is invoked from Person class";
        return message;
    }
    show(){
        Person.display()
        console.log(message);
    }
    
}
// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;