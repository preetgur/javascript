console.log("This Tut is about Date :");
 // search mozilla date object
let today = new Date();
console.log(today);

let otherDate = new Date('1988-04-03 04:54:08');
otherDate = new Date('june 10 1997');
console.log(otherDate);

let a;
a = otherDate.getDay();

a = otherDate.getDate();
console.log(a);

a = otherDate.getTime();
console.log(a);

otherDate.setDate(0);
console.log(otherDate);

otherDate.setMonth(9);
otherDate.setFullYear(1997)
otherDate.setMilliseconds(1);
otherDate.setHours(9);
console.log(otherDate);