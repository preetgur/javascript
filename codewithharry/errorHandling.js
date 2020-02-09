console.log("This tut is about  error handling in js");

// pretend this is coming from server as response


try
{
console.log('We are inside try block');
functionHarry();  // we not defined this type of function it throw error and we handle it in catch block

}

catch(error)
{
console.log('Are you okay?');
console.log(error.name);
console.log(error.message);


}

finally  // always run irrespective of try catch block
{
    console.log('Finally we will run this');
    
}


let a = "harry bhai";
//  a = undefined;
if(a != undefined){
    console.log('This is Not undefined');
    throw new Error('This is not undefined:')  // if this error occur then below written code id not executed 
}
else{
    console.log('THis is undefined');
    
}

console.log('After throw new Error');

