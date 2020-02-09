console.log("this tut is about hosting in js " );

console.log('Var has Function Scope');
// var respect the function boundary 
// var does not respect the block boundry

var x = function(){

    var y = 7
    if (true) {
        var y =1;
    }

    if (true) {
        var y =2;
    }

    // lexical scoping: things defined outside is avaialbele inside
    var z = function(){
        console.log(y);

    }
    z();
    

    // hositing :lifting something up

    console.log(i);
    
    var i = 4;
}

x();



// interview quesiton

console.log('What is the output of y ');

var y = 3;

var x = function(){
    console.log(y);
    var y = 1;
    // If we comment above y then out put is 3.
}

x();


console.log('output is undefined because var has function scope and it prints before it has initialized : This is called Hoisting');


// lack of constant in var

Object.defineProperty(window,'code',{
    value : "This is the code ",
    writable : false
});

console.log(code);
code = "Django";
console.log(code);

// const 

const hi = "hello";
console.log(hi);


// let : block scope

{
    let a = 10 

    console.log(b);   // This not with the var
    let b = 4;
    
}

console.log(a);
