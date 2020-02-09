console.log('This tut is about Type conversion:');
// javascript always takes easy path

// Adding number and string : convert Number to string is easy but string to number is difficult

let x = 2 + '2';  // 22 is typeOf : string

x = 2 + 2 + '2';    // 42 is typeOf : string

// Adding Boolean to string : Convert Boolean to Number is easy but number to boolean is difficult

x = 2+true;    // 3 is typeOf : Number

// Adding number , string and boolean : Output converts into string

x = 2+true +"3"   // 33 is typeOf : string

x = true + '5'   // true5 is typeOf : string

console.log(x); 



// Explicit conversion

x = Number('2');  // 2 : typeOf : Number

x = Number('Hello');  // Nan
console.log(typeof x);  // Number

x = Boolean(1) ; // true
x = Boolean(4) ; // true
x = Boolean(0);  // only zero is false and rest of non zero is true.

x = Boolean("hello"); // true
x = Boolean ("False") ; // true : because not a empty string
x = Boolean(""); // false : only for empty string it return false and rest of all is true

x = Boolean(undefined); //false
x= Boolean(null); // false
console.log(x); 


{
    let y = "";

    if( (y !== undefined) || (x !== null) || (x !== 0)){

    }
    
    // above can simply be written as 

    if(y){
    // it will examined  for (not undefined and  not empty string)
    // means some value is given not empty
    // not suggest for array or object : Because Object are always true . try to convert arr.length.
    }

}