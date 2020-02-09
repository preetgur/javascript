console.log('This tut is about Object.create');


// Object.create( prototypeObject , propertyObject);

let myObject = Object.create(Object.prototype);
// console.log(myObject);
console.dir(myObject);


let myLiteral = {};
// console.log(myLiteral);
console.dir(myLiteral);


let noProto = Object.create(null);
// console.log(noProto);
console.dir(noProto);

// create a constutor
 
const Car = function(givenColor){
    this.color = givenColor;
}

const redCar = new Car('red');  // Running the constructor
const carObj = Object.create(Car.prototype); // It is not going to set the initial property user sets

console.dir(redCar);
console.dir(carObj);


// Extend one construtor from another constructor

// Adding the method to car
Car.prototype ={
    getColor(){
        return this.color;
    }
};

// create new constructor
const ToyCar = function(){

};

ToyCar.prototype = Object.create(Car.prototype);

const legoCar = new ToyCar();
console.dir(legoCar instanceof ToyCar);
console.dir(legoCar instanceof Car);
console.dir(legoCar instanceof Object);

console.dir(ToyCar.prototype.isPrototypeOf(legoCar));
console.dir(Car.prototype.isPrototypeOf(legoCar));
console.dir(Object.prototype.isPrototypeOf(legoCar));


