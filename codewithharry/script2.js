console.log("This tutorial is about the variable in javascript :");

var name="Gurpreet 'Singh' ";
var marks = null;
var mark ;

var number=809;
console.log(name,marks,mark,number);
console.log(typeof name,marks,mark,number);
console.log( typeof null);


//  var ,let and const is used to declare varible in js

// var has global scope but let and const has block scope

const ownerName="Gurpreet Singh";
// ownerName="baljeet Singh";
// assignment to const varibale is not allowed; means value cannot be changed once declared
console.log(ownerName);

// const fruit;
    // This gives in error
//  you have to initialized the const varible
const fruit = "orange";

var city="Rajpura"
console.log(city);
{
let city="Rajpura";
city="Patiala";
console.log(city);
}
console.log(city);

console.log('Const Array');

const arr1 =[3,34,65,6];
// arr1 = [5,7,9];
console.log(arr1);

console.log('let array');

let arr2 =[3,34,65,6];
arr2 = [5,7,9];
console.log(arr2);

console.log('Var Array :');

var arr3 =[3,34,65,6];
arr3 = [5,7,9];
console.log(arr3);

console.log("After pushing the element in const array :");
arr1.push(99);
console.log(arr1);
console.log("After pop the element from end of aarry");
arr1.pop();
console.log(arr1);