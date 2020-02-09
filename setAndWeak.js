console.log('This tut is about sets and weakset in js');

console.log('These are two important types of data Structures in js');


// set : are like array{ reference type of data type}
// imp characterstis of sets are they allow you to store unique values of any data types it may be object
// Not abel to store duplicate values in sets
// Sets : are nothing but a unique list.

let ary = [];   // array leteral

let myArray = new Array();    // using a constructor

// In sets we have to create array with the help of constructor because it doesn't include the array literal

// syntax of sets

let mySet = new Set();     // empty set
// console.log(mySet);

// You cannot access set like array

ary[0] =3;    // adding Value 3 at index 0;

// But in set you have to use prototype method

mySet.add(1);
mySet.add(2);

// Imp. When you run a method it would  return  the "set" back. So we can use chain the methods

mySet.add(3).add(4);

// delete a value
mySet.add(1).delete(1);

// clear set
// mySet.clear();

// Array have lenght but sets have size
console.log(mySet.size);

console.log(mySet);


// convert an array into set
// Remember Set only take arguments which are iterable like array but don't like js object.

let ary2 = [5,9,3];
let mySet2 = new Set(ary2);
mySet2.add(1).add(2);
console.log("convet array into set ",mySet2);


// set are iterable
// set are not array because they are not oderable 

for(let val of mySet2)
{
    console.log(val);
    
}

// set is usable when you wanna make operations on two set : difference, union,etc.  .. coming soon

// $$$$$%%%%%%%%%%5

// imp. Set allow you to remove duplicate values
// imp . convert set into array : using spread operator or Array.from()

console.log([...new Set(ary)]);
console.log(Array.from(new Set(ary)));



// Weak Sets : use key-value pair not like the sets
// weak sets are not iterable

let ws = new WeakSet();
let ws2 = new WeakSet([{a:4},{b:9}]);
ws.add({a:1}).add({b:4}).delete({b:4});
console.log(ws);

// for(let val of ws)
// {
//     console.log(val);
    
// }

// use of weak sets : to know if someone called the constructor or directly use the methods

let wsets = new WeakSet();

class SomeClass
{
    constructor()
    {
        wsets.add(this);  // arguments which is object
    }

    method()
    {
        if(!wsets.has(this))
        {
            throw new TypeError('SomeClass.protoype.method called incompatible objects !')
        }
    }
}