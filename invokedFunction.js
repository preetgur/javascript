console.log('This tut is about immediately invoked function expression:');

// function

function abc(i){
    return i+1
}

// abc(1);
let x = abc(2);  // because it returns thats why we store it into varible x
console.log(x);


// function expression : fxn assign to a varible

let sum = function()
{
console.log("Function Expression:");

}

sum();


//  immediately function : In Three ways

// (function (inner_argumets){  })(outer_arguments) 

// (function (inner_argumets){   }(outer_argumets) )

// // if not returning anything then also use it as:

// !function(arguments){ }(parameter);
// ~function(){ }();
// -function(){ }();
// +function(){ }();

// immediately invoked function expression

let invokeExpression = (function(i){
    return i+6;
})(x);

console.log("InvokeExpression :"+invokeExpression);


// uses : 1. minifying it 
//  2. Scope  : it makes the global object  to avaialble as public object
//3. private Methods 

// (function($){
//     $(this).addClass("MyClass");
// })(window.JQuery);


var counter = (function (){
    i=0;

    return {
        get: function(){
            return i;
        },
        set: function(val){
            i = val;
            return i;
        },
        increment : function(){
            i++;
            return i;
        }
    }
})();

console.log(counter.get());
console.log(counter.set(5));
console.log(counter.increment());


