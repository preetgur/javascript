console.log('This tut is about Function Mixin');

// Fucntion mixin : a piece of code that you actually add to your object.


const jsSkill = {
    knowsJS(){
        return true;
    }
};

const engDegree = {
    hasDegree(){
        return true;
    }
};

const backendSkill = {
    knowsBackend(){
        return true;
    }
}

const jsEngineer = Object.assign({},jsSkill,engDegree);

// console.dir(jsEngineer);

// in two ways assign as:

// const fullstackEngineer = Object.assign({},jsSkill,backendSkill,engDegree); 

const fullstackEngineer = Object.assign({},jsEngineer,backendSkill);

console.dir(fullstackEngineer);

console.log(fullstackEngineer.hasDegree());
console.log(fullstackEngineer.knowsBackend());
console.log(fullstackEngineer.knowsJS());


// Two ways to build Ojects:
// 1. By using constructor
// 2. By using factory functions


// constructor

let Car = function(color){
    this.color = color;
    return this;
}

console.log('using constructor');

let redCar = new Car('red');
console.log(redCar.color);


// Factory function 

let CarA = function(givenColor){
    let moving = false;
    
    return Object.assign({},{color:givenColor,
    drive(){
        moving = true;
        return this;
    },
    isMoving(){
        return moving;
    }
});
};
console.log('using Factory Function');

let pinkCar = CarA('red');
console.log(pinkCar.color);
console.log(pinkCar.drive().isMoving());


// function Mixin:
// It uses Factory function which takes object as arguments and it would copy the methods inside the mixins into this object and returns new objects.

let humanFactory = function(givenObj){
    let isCrying = false;
    
    return Object.assign({},givenObj,{
        cry(){
            isCrying = true;
            return this;
        },
        isCrying(){
            return isCrying;
        }
    });
};

// let techsith = humanFactory({});
// console.dir(techsith);

let flyFactory = function(obj){
    let isFlying = false;

    return Object.assign({},obj,{
        fly(){
            isFlying = true;
            return this;
        },
        isFlying(){
            return isFlying;
        }
    });
};


let superman = humanFactory(flyFactory({}));

console.dir(superman);
console.log(superman.isCrying());  // false

console.log(superman.cry().isCrying()); // ture

console.log(superman.cry().isFlying()); // false
