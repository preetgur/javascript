console.log("This tut is about objects :");

// object leteral is used for creating objects

let car ={
    name: "Maruti 800",
    topSpeed : 80,
    run : function (){
        console.log("car is running");
    }
}

console.log("Object litereal for creating objects :");
// console.log(car);
console.log(car.name);
console.log(car.run());

//constructor is used for creating object

// creating a constructor for cars
console.log("Creating object using constructor :");

function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`This car is slower by ${200-this.topSpeed} Km/hr than jaguar :`);
    }
}

let car1 = new GeneralCar ("Nissan", 180);
let car2 = new GeneralCar("Alto",90);
// console.log(car1);
console.log(car1.name,"and",car2.name);
console.log(car1.topSpeed,"and",car2.topSpeed);
console.log(car1.run());
console.log(car1.analyze());

// Adding methods to constructor
GeneralCar.prototype.clear = function (car1) {
    console.log("<!--- Here We are using the prototype/ methods of constuctor -->");
    console.log(car1.name);
    console.log(car1.topSpeed);

}

// Calling the methods of contructor
let gcar= new GeneralCar();
gcar.clear(car1);    // using object  as an argument 'car1'