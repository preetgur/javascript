console.log('This tut is about sub Classes in js');


class Mammal
{
    constructor(_legs,_name="Default John")
    {
        this.legs = _legs;
        this.name = _name;
        this.warmBlooded = true;

    }

    walk()
    {
        return `${this.name} is walking`;
    }
}

// let mamal = new Mammal();
// console.log(mamal.walk());


class Bat extends Mammal
{
    constructor(_legs,_name,_eatsMeat)
    {
        super(_legs, _name);
        this.eatsMeat = _eatsMeat;
    }

    fly()
    {
        return `${this.name} is flying`; 
    }

    walk()
    {
        // using ternary operator
        let holding = this.eatsMeat ? "bug" : "carrot";
        return `${super.walk()} wiha a ${holding}`;
    }

}


let bat = new Bat(4,undefined,false);

console.log(bat.fly());
console.log(bat.walk());


{
    //  if you don't declare constructor than it automatically create the empty constructor
    // But in child class you must have the super() inside the child constructor

    class Mammal
    {
        constructor(a,b,c,d,e)
        {
            Object.assign(this,{a,b,c,d,e});
            console.log(new.target); // To know which constructor are we running
            
        }
    }

    class Bat extends Mammal
    {   
        // ...args : represent the arguments of base class and child :arguments are put before  ...args
        constructor(f,...args)
        {
            super(...args);
            this.f = f;
        }
    }

    const newBat = new Bat("f Arguments","c","h","j","p",45);
    console.log(newBat);
    
}