console.log('This tut is about Obect.setPrototypeOf :');

//   Two ways to create objects
 // 1. Use constructor to build objects
 // 2. One who directly use object literals

//  console.dir(Object);

// syntax
// Object.setPrototypeOf(destinationObject, sourceObject);

let toyota = {
    drive(){
        return "driving toyota";
    }
};

let camry = {
    wifi(){
        return "Using wifi";
    },
    drive(){
        return `${super.drive()} camry`;
    }
    // calling its own method
    // drive(){
    //     return "driving Camry";
    // }
};

console.dir(camry);
Object.setPrototypeOf(camry, toyota);

// camry.__proto__ = toyota;   // same as object.setPrototypeOf
console.dir(camry);

console.dir(camry.wifi());
console.dir(camry.drive()); 
// Both of them have same method but camry called its own method that returns :"driving camry"

// If you wanted that camry drive method return the drive() method of "prototype" you have to do like this .
// return `${super.drive()} camry`;


