console.log("Prototype Inheritance :");
console.log(" ctrl+shif+i : open console:");

// we cannot change the prototype of object liererals
// create object
const proto = {
    course : "Btech",
    slogan : function(){
        return `This company is the best`
    },
    changeName : function(newName){
        this.name = newName
    }
} 
console.log(proto);

// This creates harry object and adds the above ojects to prototype section
const harry = Object.create(proto);
console.log(harry);

harry.name = "Gurpreet Singh" ,writable=true;
harry.role = " Web developer";
harry.address = "Village Khandoli";
harry.course = "ba";
harry.changeName("Bhavnit Singh"); // calling function

console.log(harry);

let obj = Object.create(harry);
obj.name ="ABC";
obj.changeName("XYZ"); // able to change the name because it is declared as writable true
console.log(obj);
// This also creates harry2 object

const harry2 = Object.create(proto, { 
    // name : {value : "Harry"},
    name : {value : "Harry", writable:true},  // change name through function
    role : {value: "Programer"}
})
harry2.changeName("Harry Singh");
console.log(harry2);


function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// slogan  : create prototype

Employee.prototype.slogan = function(){
    return `This company is the best .Regards, ${this.name}`;
}

//create an object from this constructor now
let empObj = new Employee("harry",20000,2);
console.log(empObj);
console.log(empObj.slogan());

// programmer

function Programmer(name,salary,experience,Language){
    Employee.call(this, name,salary,experience);  // inheritance frrom employee
    this.Language = Language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
// Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan" , 20000,2, "javascript");
console.log(rohan);
console.log(rohan.slogan());