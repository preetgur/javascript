console.log("This Tut is about local storage");

localStorage.setItem("Name","Gurpreet Singh");
localStorage.setItem("Name2","Bhavnit Singh");

let name = localStorage.getItem("Name");
console.log(name);

// Clear all key-value pair
// localStorage.clear();      

//clear a particular key-value pair
localStorage.removeItem('Name2');

// how to deal with array in local storage
{
let impArray = ['adrak','pyaz','bhindi'];
localStorage.setItem('Sabzi',JSON.stringify(impArray));   // means store in the form of array
 // converts js value into json string

let name = JSON.parse(localStorage.getItem('Sabzi')); // retrive in the form of array
// convert a json string into an object
console.log(name);
}

console.log("<!--Session Storage -->");
// Differenc bw local and session storage is that when browser is closed data is session storage is cleared but local storage data is not cleared.

sessionStorage.setItem("sName","Gurpreet Singh");
sessionStorage.setItem("sName2","Bhavnit Singh");

let a= sessionStorage.getItem("sName");
console.log(a);

{
    let simpArray = ['adrak','pyaz','bhindi'];
    sessionStorage.setItem('Sabzi',JSON.stringify(simpArray));   
    let name = JSON.parse(sessionStorage.getItem('Sabzi')); // retrive in the form of array
    // convert a json string in object
    console.log(name);
    }