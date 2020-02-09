console.log('This tut is about negative index in array and array performance  :');

console.log("Weirdness of JavaScript Arrays");

// In javascript indexes are automatic. You donot have negative index
let ary = [1,2,3];

ary[-1] = 0 ;  // It Treats as key-value pair
console.log(ary.length); // it gives me the length of array as : 3
console.log(ary[-1]);

{
console.log('Array behaves like an object');
    

let arr = [];

arr["key1"] = "key Value 1";
arr["key2"] = "key value 2";

console.log(arr.length); // 0 : because there is not any regular array

for(let key in arr){
    console.log(`The name of Key :${key} and ${arr[key]}`);
    
    }

}

// An Object : has no lenght as compared to array

let obj = {};
obj[0] = 1;
obj[1] = 2;
obj[3] = 3;

console.log(obj);


// Performance of Array and Object : Not much different (vary from browser to browser)
console.time('a');
const a = [];
for(let i = 0; i<1000000; i++){
    a[i] = i;
}
console.timeEnd('a');


console.time('o');
const o = {};
for(let i = 0; i<1000000; i++){
    o[i] = i;
}
console.timeEnd('o');


// Insert inot array
console.time('ain');
a[5000000] = 5000000;
console.timeEnd('ain');


// Insert into object
console.time('oin');
o[5000000] = 5000000;
console.timeEnd('oin');
