console.log("This tut is about await  in js");

// function harry(){
//     console.log("Inside the harry function:");
//     return "harry";
// }

// console.log("Before calling harry :");
// let a = harry();
// console.log("After calling harry :");
// console.log(a);
// console.log("Last line of this js file");

// async function return promise

async function harry(){
    console.log("Inside the harry function:");
    const response = await fetch('https://api.github.com/users');
     console.log('before response');
     const users = await response.json();
     console.log('users resolved here')
     return users;
    // return "harry";
}

console.log("Before calling harry :");
let a = harry();
console.log("After calling harry :");
console.log(a);    // promise is in pending state
a.then(data => console.log(data))
console.log(a);    // promise is in pending state
console.log("Last line of this js file");