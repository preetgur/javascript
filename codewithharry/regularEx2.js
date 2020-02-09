console.log('This Tut is about metacharater in js :');

let regex =/harry/;

// let look into some metachararctor symbols

regex =/^ha/ ;  // ^ is known as carrot ,it means starts with

regex = /tube$/ ;  // $ : string ends with

regex = /h.rry/ ;   // . means matches any one chractor
// means where ever is . we can use any charcter but the rest of should be matches.
/*
hdrry  => matched
hddry  => Not matched

*/

regex = /h*rry/ ;   // . means matches one or more chractor

/*
h klsdfjlkdsjf rry  => mathced
h klsdfjlkdsjf rdy  => Not mathced

*/

regex = /ha?rryi?t/ ;  // ? => means optional (a and i )
/* 
 hrryt => matched
 harryt => matched
 hrryit => matched
 hrryjt => not matched

*/

regex = /h\*rry/  ;   // blackslash (\*) : means we tell we not treat it has metachracter
let str = "harry is harry ";

//  1. exec() => This function will return an array for match or nul for no match.

let result = regex.exec(str);
console.log('The result of exec is ',result);

// 2. test() - Return true or false if expression matched

if (regex.test(str)){
    console.log(`The String '${str}' matches the experession '${regex.source}'`);
    
}
else{
    console.log(`The String '${str}' doess not match with the experession ${regex.source}`);
}