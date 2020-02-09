console.log("This tut is about prototype :");



let obj ={ 
    name : "Gurpreet singh",
    course : " Btech",
    address : " Village Khandole"
}
console.log(typeof obj);
console.log(obj);
console.log(obj.address);

console.log("We cannot change the prototype of Object literal :");

// obj.prototype.getName = function(){
//     return this.name;
// }



// constructor 

function Obj(givenName){
    this.name = givenName;
}


let obj2 = new Obj("Bhavnit Singh");   //creating objects
console.log(obj2);
console.log(obj2.name);

console.log("We can change the prototype of Constructor :");

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name= newName;
}


console.log(obj2.getName());

obj2.setName("Ekbal Singh");
console.log(obj2.name);