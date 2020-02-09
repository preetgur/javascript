console.log('This Tutorial is about regualr experession:');

let reg = /harry/; // This is a regular experssion literal in js .

//flags are : g,i
reg = /harry/g;  //'g' is for global search for expression in whole string

// reg = /harry/i; // 'i' for case incensitive

console.log(reg);  // prints  /harry/
console.log(reg.source);  // prints  harry


let s = "This is great code with Harry and Harry and harry and harry or garry";
// function to match experssions

//  1. exec() => This function will return an array for match or nul for no match.

let result = reg.exec(s);
console.log(result);    // print first harry if we use g as flag
 
result = reg.exec(s);
console.log(result);  // print second harry

result = reg.exec(s);
console.log(result);  // print null no more harry
 
if(result){

console.log(result.input);  // if result is null then it will thow error so use in if else
console.log(result.index);
}

// 2. test() - Return true or false if expression matched

let result1 = reg.test(s)
console.log(result1);

// 3. match()  - It wil retutn an array of resluts or null

// let result2 = reg.match(s)  => this wrong !!!
let result2 = s.match(reg) ;  // This is right
console.log(result2);


// 4. search()  - Return index of first mathc else -1
//let result3 = reg.search(s);   // This is wrong

let result3 = s.search(reg);
console.log(result3);


// 5. replace() - return new replace string with all the replacements
// if no global is used then it will replaced only first matched

let result4 = s.replace(reg,"Gurpreet");
console.log(result4);
