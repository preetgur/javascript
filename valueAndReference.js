console.log('This tut is about pass by vlaue vs pass by refernce .');

/*  
In js when you assign the value to a varible, it actually holds the address where this varible is stored.So, it(variable) has refernce to address.

So in js value is always passed by reference

When we re-assgin the value of referecne (using equal to )it will create a change variable with it address
*/


let a = 1;  // primitive value

// when i pass "a" in change fucntion its, actually the reference but when i re-assign the value means i change its address : re-creating the same varible again 
let change = (val) => {
    val = 2;  // re-assign value
};

// In this "val" make the copy of "a :1" and if you make change inside of fxn than it would not reflect outside.

// You cannot mutate the primitive value, you can only replace it but ehen i replace it , it create a new varible inside the fxn.
change(a);      
console.log(a);   // output :1


// In js value always pass by reference

// for objects

let b = {num :1};

let change2 = (val) =>{
    // val = {};       // re-assign the object. it create a varible "val" with new address
    val.num = 4;       // mutating the object
};

change2(b);   
console.log(b);

// Difference bw re-assing and mutating

/*  
When you mutating the varible it also reflect outside
ex.
    val.num = 4 ;  
    // This mutation is also refelect back to the "b"
    when you mutate it keep the reference

When you re-assign it, it will not refelct back    (re-assign means you lose reference)
    Change varible with its new address regardless wheater its is primitive or object variable
*/

{

let a = {num :1};
let b = a;

a.num = 2;  // mutating: when mutating the "b" is also changed.

a ={};   // re-assign : Not reflect back to b
console.log(a,"and",b);


}