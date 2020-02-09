console.log('This tut is about class in js');

// Type of class in js in function

class Car 
{
    constructor(color)
    {
        this.color = color;
     }

     drive()
     {
         console.log('Driving Class');
         
     }
}

console.dir(Car);

let redCar = new Car("Red");
console.log(redCar);


// we can also create class using immediate function


{
    // let Car = ()(); immediate invoked function

    let Car = (function(){
        let _car = function(color)  // constructor
        {
            this.color = color;
        }

        _car.prototype.drive = function()
        {
            console.log("driving");   
        }

        return _car;
    })();

    console.dir(Car);
    
}
