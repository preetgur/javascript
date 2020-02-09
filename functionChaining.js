console.log('This tut is about function chaining in js');
 
// In jquery function chaning look like as:
// $('mydiv').removeClass("off").addClass('on');

// regular function
var obj = function(){
    this.i = 0;  // local to all
    this.add = function(i){
        this.i += i;
    };
    this.subtract = function(i){
        this.i -= i;
    };
    this.print = function(){
        console.log(this.i);
        
    };
};


var x = new obj();
x.add(5);
x.subtract(2);
x.print();

// function chaining: It can be done by "return this" to every method expect the last one.

{
    let obj2 = function(){
        this.i = 0;
        this.add = function(i){
            this.i += i;
            return this;
        };
        this.subtract = function(i){
            this.i -= i;
            return this;

        };
        this.print = function(){
            console.log(this.i);
            return this;
            
        };
    };

    let y = new obj2();
    // console.dir(y);
    y.add(10).subtract(2).print();
    // console.dir(y);
    
    
}

// how to do the same thing if we are in closure
// 1. we have to create the varible and method as private not public
// 2. Donot require the new keyword while creating the object
// 3. return all the function as object

{
    var obj3 = function(){
        var i = 0;  // clousure
        var add = function(j){
            i += j;
            return this;
        };
        var subtract = function(j){
            i -= j;
            return this;

        };
        var print = function(){
            console.log(i);
            
        };
        // pass all the function as object
        return{add:add,subtract:subtract,print:print};
    };

    let z = obj3();
    
    z.add(6).subtract(2).print();
    console.log(z);
}