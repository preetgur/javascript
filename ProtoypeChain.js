console.log('This tut is about prototype chaining');

// First construtor
const Car = function(){

}

Car.prototype = {
    print(){
        return "I am a Car";
    }
}


// Second construtor

const ToyCar = function(){

}

ToyCar.prototype = Object.create(Car.prototype); // inherit the prototype of car consturtor

// set additional method

ToyCar.prototype.print = function(){
    return "i am a toycar";
}


// Third construtor

const ToyTransformer = function(){

}

ToyTransformer.prototype = Object.create(ToyCar.prototype); // inherit the prototype of Toycar constructor


// set additional method
ToyTransformer.prototype.print = function(){
    return " I am a toyTransformer"
}



const toyota = new Car();
const legoCar = new ToyCar();
const optimusPrime = new ToyTransformer();

console.log(toyota.print());
console.log(legoCar.print());
console.log(optimusPrime.print());


/*
Priority is given to method which is defined in the constructor (its own constructor) then it check for its parent (From where it inherit)

In this we three constructor: 
1.Car 
2.ToyCar
3.ToyTransformer

Each of them have their own print method

Constructor : ToyTransformer inherit the prototype of ToyCar.
Constructor : ToyCar inherit the prototype of Car

let assume that ToyTransformer do not have its own method name as "print()" Then it checks the "print()" method from ToyCar.

let assume that ToyCar also is not having the print() method then it check for Car.

If the print() is found then it execute that function.

*/
