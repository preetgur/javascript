console.log("Data Types in js");
console.log("Primitive Data types uses 'stack' and Reference Data types uses 'Heap' : ");
console.log("Primitive Data types are: Strings,Number,Boolean, Null , Undefined, symbols ;");
console.log("References Data types are: Arrays, Object literas, functions, Dates ;");

console.log("///Primitive Data types:")

// String
let name="Gurpreet Singh";
console.log("My Name is "+name);
console.log("Data Type is "+ (typeof name));        // in python we use type(name)

// Number
let marks=34;
console.log("Data Type is "+ (typeof marks));

// Boolean
let isDrive= true;
console.log("Data Type is "+ (typeof isDrive));

let nullVar =null;
console.log("Data Type is "+ (typeof nullVar));

let undef ;
// or use as  let undef= undefined;
console.log("Data Type is "+ (typeof undef));


console.log("///Reference Data types:")

myarr =[3,5,6,false,true,"String",null,undefined];
console.log(myarr);

console.log("Array Data Type is "+ (typeof myarr));

// console.log("Object literals");

let stMarks ={
Gurpreet: 79,
Ekbal: 45,
Bhavnit:65
}
console.log("Data Type is "+ (typeof stMarks));

console.table(stMarks)

function findName() {
    
}
console.log("Data Type is "+ (typeof findName));

let date = new Date();
console.log("Data Type is "+ (typeof date));
console.log(date);

