console.log('This tut is about static method:');

// static method 

class Car {
    constructor(color,price){
        Object.assign(this, {color,price});
    }
    static comparePrice(car1, car2){
        console.log(this.color);  // undefined
        
        return Math.abs(car1.price-car2.price) ;

    }

    // intansce method
    getColor(){
        // console.dir(this);
        return this.color;
    }
}

// Car.comparePrice(); // return class
// Basically static methods are called on class

const newCar = new Car()
newCar.getColor(); // return object
// whereas instance methods are called on instance of class

const redCar = new Car('red',545);
const blueCar = new Car('blue',500);

console.log(Car.comparePrice(redCar,blueCar));



{
 
    class CarA{
        constructor(price){
            this.price = price;
            console.log("Set the price :",this.price); // 100
            
        } 
        // in static you cannot use this keyword
        static sellCar(car){
            console.log(this.price); // undefined
            
            return `selling for ${car.price}`;
        }
    }
    
    class Toyota extends CarA {
        constructor(price){
            super(price); // calling the constructor of CarA and set the price = 100
        }
        static sellCar(car100){
            return `Toyota ${super.sellCar(car100)}`
        }
    }

    const camry = new Toyota(100); // set the price in constructor
    console.log(camry); // it only contains price :100
    
    console.log(Toyota.sellCar(camry));
    


}