console.log('This tut is about how to create objects in js');

/*
Object in js:
1. Non-function Objects
2. Function Objects

(yes functions are also object in JS)
*/


// create Empty object
{

let x = {}    
let y = new Object();

// console.dir(x);

}

// create object

const Pizza = {
    // Public property : Pubic menas the thing Which is acessed anywhere in Pizza block using "this" keyword.

    crust : "thin",
    toppings : 3,
    hasBacon : true,
    // Public method
    howmanyToppings : function(){
        return this.toppings;
    }
};

// Accessing the property
console.log(Pizza.crust);
console.log(Pizza.howmanyToppings());
console.log(Pizza.price);

// Adding property outside the object
Pizza.price = 100;

// remove a property
delete(Pizza.crust);
console.log(Pizza);

// This type of object is sigleton object : means you only create for one time .you dont create other object from it.That's why we can directly access it using(.) notation like(Pizza.crust)

//#######$$$$$$$$$$$$$$$

// fucntion object : is used in order to create objects from other object
// in this you are not has access to public property directly using (.) rather we have to create new object in order to access the property

var PizzaFunction = function(){

    this.crust = "thick";
    this.toppings = "4"
    this.hasBacon = false;
};
console.dir(PizzaFunction);
console.log(PizzaFunction.crust);  // it gives undefined

// in order to acces the property we have to create its object

let Pizza1 = new PizzaFunction();
console.log(Pizza1.crust);
console.log(Pizza1 instanceof PizzaFunction);
console.log(Pizza1.constructor);



// update the vlaue

Pizza1.crust = "pan";
console.log("After Updating:",Pizza1.crust);



// create private variable and methods

var PizzaPrivate = function(){
    var crust = 'thin'; // private varibles
    this.hasBacon = true; // public vaibles
    var toppings = 5;

    this.getHasBacon = function (){ // public method
        return this.hasBacon;
    };
// accessing private varible using public method 
    this.getCrust = function(){
        // using private varibles that's why we are not using this keyword
        return crust;
    };

    var getToppings = function(){
        // private method;
        return toppings;
    };    

    //in order to access private methods we have to create non fucntional object

    var tmp = {};
    tmp.getToppings = getToppings;

    return tmp 
    
    ;  // when call it does not have any public methods or variables

};

// if we remove return tmp the it works correclty  
// tmp is return only the private method getToppings

var pizza2 = new PizzaPrivate();
// console.dir(pizza2.crust);   // gives undefined
// console.dir(pizza2.hasBacon) ;  // gives true
// console.dir(pizza2.getHasBacon()) ; 
// console.dir(pizza2.getCrust()) ;  // gives thin
console.log(pizza2.getToppings()) ;   // gives 5
// with the help of clousure it returns 5