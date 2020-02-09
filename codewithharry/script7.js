console.log("This tut is about if else codition in js:")

const no=45;
if(no!=5){
    console.log("Number is not 45");
}
if(no==45){
    console.log("Number is 45");
}

else{
    console.log("Number is not found");
}



// We can use multiple if stmt  the disadvantage is that every "if stmt" is evaluated even the conditon is matched but when we use elseif it evaluaeted the condition till not matched.

const age=65;
if (age==18){
    console.log("Age is 18");
}

else if(age== 65){
    console.log("Age is 65");

}

else{
    console.log("Age is not 18");
}

// double equalto == only compare the value but not its type
// !=

const ab=18;                     // Number
const xyz = "30";                // String
if (ab==18 && xyz==30){
    console.log("Its value is same but not the its type :"+ab);
}

else if (ab === 18 && xyz === '30'){
    console.log("Both value and its type are same :");
}

else if (ab === 18 && xyz !== '30'){
    console.log("Both value and its type are different :");
}
else{
    console.log("ab is not 18");
}

// triple equalto === compares the both the value and its type


let vari;

if(typeof vari !== 'undefined'){
    console.log("vari is defined :");
}

else{
    console.log("Vari is not defined :");
}

// Boolean in if stmt
const doesDrive = true;
let hi=65
if(doesDrive && hi<20){
    console.log("your age is less then 20 ");
}
else if(doesDrive == true || hi>60)
{
    console.log("your age is greater than 65 :")
}
else{
    console.log("You cannot drive");
}


// Ternory operator
let rt=45;
console.log(rt==45? "rt is 45":" rt is not 45");

//  switch stmt
console.log("<!--- Switch Statements--->");

const ag =34; 
switch(ag){
    case 18:
    console.log("Age is les than 18:");
    break;
    
    case 24: 
    console.log("Age is greater than 18");
    break;
 
    case 34:                             // This is case is matched with ag=34
    console.log("Age is matched:");
    break;

    default:
    console.log("Unknown Age:");
        break;
}