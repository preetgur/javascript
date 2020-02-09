console.log("This tutorial is about the Type conversion and coercion :");

let myVar;
myVar = 45;
console.log(myVar);

myVar=String(45);
console.log("converting "+myVar+" (number) into :", (typeof myVar));

let booleanVar = true;
console.log(booleanVar);

booleanVar= String(true);
console.log("converting "+booleanVar+" (boolean) into :", (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = [3,2,5]
console.log(arr);

 arr= String([3,2,5]);    // Three no 3 2 5 and two , , so total lenght is : 5  because it is a string now see same as for array it gives only 3 object
console.log(arr.length, (typeof arr));

let arr1= [3,2,5];
console.log(arr1.length, (typeof arr1));

let i=4;
console.log(i+9 ,"Adding 9 with 4 which is number"); 
console.log(i.toString()+9,"Adding 9 with 4 which is a string");

let stri=Number("345");
console.log(stri+5);
let str2=Number("hi");
console.log(str2);


let st =Number(true);
console.log(st);

let number =parseInt('67.997');
console.log(number, (typeof number));

let number1 =parseFloat("67.2");
console.log(number1, (typeof number1));
console.log("Limit the decimals after dot. "+number1.toFixed(10));

let a ="34";
let b =34;
console.log(a+b);

{
let b =34;
console.log("After conversion output :" + (Number(a)+b));
}
