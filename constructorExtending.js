console.log('This tut is about extending the constructor');

// constructor
let Mammal = function(legs)
{
    this.legs = legs;
}

Mammal.prototype = {
    walk()
    {
        return "walking!";
    },
    sleep()
    {
        return "Sleeping";
    }
};

// Sub constructor

 let Bat = function(legs, isVegetarian)
 {
    Mammal.call(this,legs);
    this.isVegetarian = isVegetarian;
 };

// if you create Bat prototype before calling the protoype of Mammal it would wipe out the bat prototype.
// So, set the bat prototype mannually
 Bat.prototype = Object.create(Mammal.prototype);
 Bat.prototype.constructor = Bat;
 Bat.prototype.fly = function(){
     return "Fly";
 }
 console.log(Bat);
 
 let fruitBat = new Bat(4,true);
 console.log(fruitBat);
 console.log(fruitBat.sleep());
 console.log(fruitBat.fly());
 

 
