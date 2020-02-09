console.log('This tut is about Array.from() Method:');
// Array.from is constructor based


// console.dir(Array);   // constructor
// console.dir([]);  // prototype of Array

// In protoypte of array you can directly used array like: (With the fxn include in prototype of array)

// [1,2,4].splice() : prototype method

// Array.from()   : constructor method


{
// Array.from() : is used to create array from something it could be an array like objects or you create a brand new array from scratch.

let str = "techsith";
console.log([...str]);     // spread operator

let str2 = "hello how are you";
console.log(Array.from(str2));

}


{

// create array of specific lenght
// create empty array with undefined

let fromScratch = Array.from({length:4},(value,index) => value);

console.log(fromScratch);

// array with empty string
let fromScratch2 = Array.from({length:4},(value,index) => "");

console.log(fromScratch2);

// Create above without using Array.from()

let emptyArray = new Array(5);
let emptyArray2 = (new Array(5)).fill(0);
let emptyArray3 = (new Array(5)).fill(0).map((value,index) => index);


console.log(emptyArray);
console.log(emptyArray2);
console.log(emptyArray3);

}


{
// remove duplicate value
let ary = [1,3,4,3,1];

let unique = Array.from(new Set(ary));
console.log(unique);


// Without array.from : using spread array

let unique2 = [...new Set(ary)];
console.log("Using Spread operator :",unique2);

}


{// In Fucntions

    let func = function()
    {
        console.log(arguments);
    }

    func("t","e","c","h","s","i","t","h");

// Array.from()

let fun2 = function()
{
    console.log(Array.from(arguments).join());
    console.log(Array.from(arguments).join(""));
    console.log(Array.from(arguments).join(" "));
    console.log(Array.from(arguments).join("$"));

}

fun2("t","e","c","h","s","i","t","h");
 
}