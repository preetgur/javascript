
console.log("Javascript Tagged Template string in ES6");

console.log('Backtick (``) ');

let str = 'hello';   // single quote
str = "hello";       // Double quote
str = `hello`;       // backTick

console.log('< **** First Feature of BackTick ****>');

str = 'hello\n' + 'world'; // world prints on new line

str = `hello
world`;        // same as above shows world on new line

console.log(str);

console.log('< **** Second Feature of BackTick ****>');

let raw = String.raw`Not a newline:\n `;       // escape charcter is not working here
raw = String`Not a newline:\n `;               // works here

console.log(raw);

console.log('< **** Third Feature of BackTick ****>');

let name = `bond`;
let course = 'B.tech';
let bondline = `my name is ${name}, James ${name} and i completed by ${course} in 2019 `;

console.log(bondline);

console.log('< **** Fourth Feature of BackTick ****>');

// backtick converts anyother type into string type;

let one = 1;
let two = 2;
// sum = one + two;   // type is number
let sum = `adding ${one} and ${two} gives me ${one + two}`;

console.log(typeof sum);  // string
console.log(sum);


console.log('< **** Fifth Feature of BackTick ****>');

// tagged template
// vals is called as spread operator : means n no of arguments

let tagged = function(strArray , ...vals){
    console.log(strArray);
    console.log(vals);
      
}

tagged`adding ${one} and ${two} gives me ${one + two}`

// passing the string template into function as arguments
// it as two parts:
// 1. It tokenize the regular string as : strArray
// 2. and tokenize one, two into : vals


console.log("hello world".startsWith("hell"));
console.log("hello  world".endsWith("hell"));
console.log("hello world".includes("hell"));
console.log("hello world\n".repeat(3));
