console.log('This tut is about Maps ans WeakMaps.');
 
// problem with regular objects

const x = {};

const a = {}; 

const b = {num : 1};

// Assign key and value of x objects
x[a] = 'value';
x[b] = 'b';
x[b] = 'b value';

console.dir(x);

for(let key in x)
{
    console.log(x[key]);
    
}

// javascript only support one key object.It cannot support mulitple objects. 
// when i wrote multiple key objects ,it's only rememeber the latest key objects thats the problem. 
// That's way maps is introduced.

// Map is called using consturctor

const map = new Map();

// map.set(key,value)
map.set(a,'This is the value of key : a'); 
// keep the latest key-value

map.set(b,"value of B").set(a,"latest value of key :a");

// remove key

// map.delete(b);

// map.clear(); 
console.dir(map);

// for of loop

for(let [key,value] of map.entries())
{
    console.log(key,value);
    
}


// convert map into array using spread operator

const ary = [...map];
console.dir("convet map into array ",ary);


// weak map 
// why we need it: Because Once you defined the map's key it can hold it in the memory even the key is deleted in maps it doesn't let the garbage collect it.

 
{
    let x ={ a :[1,4] };

    var map2 = new Map();
    map2.set(x,"some value");
}

console.log(map2);  // accessible outside its block


{
    let x ={ a :[1,4] };

    var weakmap = new WeakMap();
    weakmap.set(x,"some value");
    console.log(weakmap);  // accessible within its block

}

console.log("Weak Map outside its block ",weakmap);  // Not accessible outside its block
