console.log("This tut is about arrow function in js:");

function harry() {
    console.log("This harry function:");
}
harry();

const harry2 = function () {
    console.log("This is harry2 function:");
}

harry2();

console.log("Arrow function:");

const harry3 = () => {
    console.log("This is harry3  funciton:");
}

harry3();

{

let a =5;
let sqr = ()=> a*a;
console.log(`square of ${a} using fat arrow function:` ,sqr());
}

// function returnig something:

const greet = () => {
    return "Good Morning";
}

console.log(greet());

// one liner do not require braces and retrun : one line will automatically return
const greet2 = () => "Good Evening";
console.log(greet2());

// if returnig a object then put the object in paranthesis()
const dict = () => ({ name: "Gurpreet Singh",course:"Btech" });
console.log(dict());

const name = (nm) => "Good Night, " + nm;
const name1 = nm => " Have a nice day " + nm;
const name2 = (name, course, rollno) => "Your name is " + name + "\n Your course is " + course + "\n your roll no is " + rollno;

const name3 = (nameDefault ="Gurpreet Default", course, rollno) => `your name is ${nameDefault} and your rollno is ${rollno} and your Course is ${course}`;
// For singhle parament you can also pass parament without paranthesis 
// multiple parament require paranthesis
console.log(name("Gurpreet singh"));
console.log(name1("Gurpreet singh"));
console.log(name2("Gurpreet Singh", "Btech/cse", 151130));
console.log(name3("Ekbal Singh", "Btech/cse", 151133));
