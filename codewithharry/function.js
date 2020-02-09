console.log("This tut is about functions in js :");
console.log("<!-- Without Functions -->");

let name = "Gurpreet Singh";
console.log(`Happy birthday ${name} My good wishes are always there with you.`);

console.log("<!-- Simple Functions -->");

function greet1(nm){
    console.log("Happy Birthday "+nm+" My good wishes are always there with you");
}
greet1(name);


console.log("<!-- Functions with return value -->");

function greet(name, thank="Default Thanks"){
let msg =`Happy birthday ${name} My good wishes are always there with you. ${thank}`;

// let msg ="happy birthday "+name+"My good wishes are always there with you."+thank;
return msg;
}

let val =greet(name,"Thanks a lot!") ;
console.log("Return from fuction :"+val);

// <!-- Assign functions to varibles -->
console.log("<!-- Assign function to varibles : function is called Anonymous functions -->");
 
// varible name is use as fucntion name
const greet2 = function(name, thank="Welcome!"){
    let msg =`Happy birthday ${name} My good wishes are always there with you. ${thank}`;
    return msg;
}
let xyz =" Bhavnit Singh"
let val2 = greet2(xyz);
console.log(val2);

console.log("<!-- Using fuctions with object literals or Json -->");

const obj = {
    name :" Gurpreet singh",
    game : function(nm){
        let msg=`${nm} always played `;
        return msg+"PUBG";
    }
}

console.log(obj.game("Gupreet Singh"));


arr =["fruit", "orange","Apples"];

arr.forEach(function(element, index , array){
console.log(element,index);
});

console.log("<!-- Scope in js :local and golbal -->");

var i = 34;     
console.log(i);  //global i prints 34

function ui(name){
    var i = 9;    // This is local 

    // i=9;  override the global i
    console.log("Inside fuction :"+i);   // print 9
    return `This is a ${name} and value returnig from function :${i} where as from `;
}
console.log(ui("harry"),"Outside Function value is :"+i);

let val3 = ui("Gurpreet")
console.log(val3);


console.log("<!-- Var has global scope and let,const has local scope -->");

{
    var i= 345;
    const j=89;
    let k=79;
    // console.log(i);
}
console.log(i);
console.log(j); 
console.log(k);
// This gives an error beacause let and const has local global and we are using out of its environment