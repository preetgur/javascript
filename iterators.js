console.log('This tut is about iterable and iterators in js');

// Array is iterable
let numArray = [3,5,6,7];

console.dir(numArray);

let len = numArray.length;

for(let i = 0; i<len; i++)
{
console.log(numArray[i]);

}

 
// object is not iterable

let anObject = {
    name : "bob",
    age : 20,
    friends : ['johan','kim','peter'],
    getName : function(){
        return this.name;
    }
    
}

console.log("Object using for loop");
for(let key in anObject)
{
    console.log(anObject[key]);
    
}

// Inorder to check which is iterable or not check for "symbols.iterator" method in its prototype. If it is present then it is iterable otherwise not.


// Data structor in js like:
// set, weaksets ,map and weakmaps are iterable

let mySet = new Set([3,6,4,2,1]);
console.dir(mySet);

// for-of : applicable only for iterable things 

for(let key of mySet)
{
    console.log(key);
    
}


// using symbol.iterator

let myArray2 =[3,5,6,8,8];

let iterator = myArray2[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
