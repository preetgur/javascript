console.log("This tut is about arrays and objects");

let marks= [34,65,35,77,89,9,456,09];
// console.log(marks);

const fruits= ['orange','apple','Banana'];
// console.log(fruits);

const mixed= ['str',89,[4,6]];
console.log(mixed);
console.log(mixed[2][1]);



const arr = new Array(34,56,6,'Orange');
// console.log(arr);
// console.log(marks[2]);
console.log(mixed.length);
console.log("return true if it is array :",Array.isArray(arr));         // important 

console.log(arr);

arr[0] ='Gurpreet Singh';
console.log(arr);

console.log(marks);
let value = marks.indexOf(77);
console.log(" It given the index value where the 77 lies in array :"+value);

console.log("Arrays on which operations is performed : "+marks)
// mutating or modifying arrays
marks.push(455);   // At the end of array
marks.unshift(1111);  // At the begninig of array
console.log("After pushing the elements to the arrays at first and last position :"+marks);

marks.pop()   // remove last element
marks.shift()  // remove first element
console.log(" Removing the first and last elements from arrays :"+marks);

console.log(marks);
marks.splice(0,4);
console.log("Splice: means removes the elements bw two given index (0,4) but not includes the last index value :"+marks);

marks.reverse();
console.log(" Reverse of arrays: "+marks);


let marks2 = [1,4,5,6]
marks =marks.concat(marks2);
console.log("When concat the two array remembers they should not be declared as const :"+marks);  // override marks array


console.log("objects in js")

let myObj = {
    'Full name' : 'Gurpreet Singh' ,
    course : "BTech",
    isActive : true,
    marks:[99,33,54,56]
}

console.log(myObj);
console.log(myObj.isActive);
console.log(myObj['isActive']);
console.log(myObj['marks']);

console.log(myObj['Full name']);   // if using space in key name

myObj['course'] = "BTech/CSE";       // update the value
  
console.log(myObj.course);




let myArray = [{"child": ["one", "two", "three", "four"]}, 
               {"child": ["five", "six", "seven", "eight"]}];

for(let i = 0; i < myArray.length; i++){

   let childArray = myArray[i].child;

   for(let j = 0; j < childArray.length; j++){

  console.log(childArray[j]);

   }

}