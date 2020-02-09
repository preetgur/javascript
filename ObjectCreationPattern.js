console.log('This Tut is about Object Creation Patterns:');

/*  
Constructor Pattern
Factory Pattern
Prototype Pattern
Dynamic Prototype Pattern
*/

// javascript has no formal support for class

//Factory Pattern


let peopleFactory = function (givenName, givenAge, givenState) {

    let temp = {};
    // let temp = new Object;

    temp.age = givenAge;
    temp.name = givenName;
    temp.state = givenState;

    temp.printPerson = function () {
        console.log(`${this.name} , ${this.age} , ${this.state}`);

    };

    return temp;   // returning object
};

var person1 = peopleFactory("Johan", 12, "Punjab");
var person2 = peopleFactory("Cena", 12, "Delhi");

console.log('Factory Pattern :');

person1.printPerson();
person2.printPerson();


// constructor pattern : we are not returning any object so we have to create a new object 

// peopleConstructor : behaves like a class

let peopleConstructor = function (givenName, givenAge, givenState) {

    this.name = givenName;
    this.age = givenAge;
    this.state = givenState;

    this.printPerson = function () {
        console.log(`${this.name} , ${this.age} , ${this.state}`);

    };
};

let person3 = new peopleConstructor("Bhavnit", 22, "Fatehgarh Sahib");

console.log('Constructor Pattern :');
person3.printPerson();



// Prototype Pattern:

let peopleProto = function () {
    // empty object
};
// initialize/set Default Parameter
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "Enter Name";
peopleProto.prototype.state = "Enter City";

peopleProto.prototype.printPerson = function () {
    console.log(`${this.name} , ${this.age} , ${this.state}`);

};

console.log('Prototype Pattern :');

let person4 = new peopleProto();

// overiding with new 

// person4.name = "Ekbal";
person4.age = 23;
person4.state = "Khanna";

person4.printPerson();
console.log('name' in person4);  // returns true

console.log(person4.hasOwnProperty('name')); // it returns "false" because  name is not defined while call a new object.


// Dynamic prototype Pattern

let peopleDynamicProto = function (givenName, givenAge, givenState) {

    this.name = givenName;
    this.age = givenAge;
    this.state = givenState;

    //if the fucntion is not defined then create it's prototype
    if (typeof this.printPerson != 'function') {

        peopleDynamicProto.prototype.printPerson = function () {
            console.log(`${this.name} , ${this.age} , ${this.state}`);

        };
    }
};



console.log('Dynamic   Prototype Pattern :');

let person5 = new peopleDynamicProto("Inderjeet", 23, "ldh");

//    person5.printPerson();

console.log('name' in person5);

console.log(person5.hasOwnProperty('name')); 