console.log('This tut is about decorator in js');

console.log('Deocrating : Look More Attractive by adding extra items');

/*
let lipstick = function(color){
    return function(target){
        target.lips = color;
    }
};

let earrings = function(target){
    target.hasEarring = true;
}

@lipstick('black')
class Girl{

}

console.log(`her lips are ${Girls.lips} and she has hearring = ${Girl.earrings}`);

*/

// proprerty descriptor decorator

let readonly = function(target,key,descriptor){
    descriptor.writable = false;
    return descriptor;
}

class Car {
    constructor(color){
        this.color = color; 
    }

    @readonly
    getColor(){
        return this.color;
    }



    // getColor (){
    //     return this.color;
    // }
}

// in order to make methods cannot be overriden we use as: Without using decorator

/*
let descriptor =
    {
        value : function(){
            return this.color;
        },
        writable : true,
        configurable : true,
        enumerable : true
    
    };
 
let readonly = function(target,key,descriptor){
    descriptor.writable = false;
    return descriptor;
}

descriptor = readonly(Car.prototype,'getColor',descriptor)

Object.defineProperty(Car.prototype,'getColor',descriptor);

*/
const redCar = new Car('red');

// in javascript method can be overriden outside

redCar.getColor = function(){
    return 'blah blah';
}

console.log(redCar.getColor());

