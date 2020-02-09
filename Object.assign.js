console.log('This tut is about Objec.assign in js');

// object leteral

let toyota = {
    drive() {
        return "Driving toyota";
    },
    break(){
        return "Breaking toyota";
    }
};


let camry = {
    wifi(){
        return "using wifi";
    },
    drive(){
        return " Driving Camry";
    }
};
// Object.assign(CopyTo, CopyFrom)
// method copy
// In case we having the same method like(drive()) it usually kept one of them which is  usually the copied one  
Object.assign(camry,toyota);
console.dir(camry);
console.dir(camry.drive());

// in case of name collison it overide the local method with copied one 
// camry.drive() => returns "Driving toyota"


// Copy the whole object into empy object
// Type of copy is : shallow copy not deep copy
// important : prototype method is not copied into them.
let copyToyota = Object.assign({},toyota);
console.dir("Copy Object :",copyToyota);

// Adding method
Object.assign(toyota,{
    network(){
        return "Network is not available";
    },
    carrier(){
        return "Serviec is provided by jio";
    },
    area : "Rajpura"
});

console.dir(toyota.network());
console.dir(toyota.carrier());
console.dir(toyota['area']);


// using in constructor
let c1 = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
};

// also write as :

let c2 = function(x,y,z){
    Object.assign(this, {x,y,z});
    return x+y+z;
};

console.dir(c2(5,6,8));
