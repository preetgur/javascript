console.log("This tut is about Website Layout :");
console.log("Dom: Document object Modeling:");

let a = document;
console.log(a);
a = document.bgColor;
console.log(a);

a = document.all;
console.log(a);

// a = document.body;
// a = document.forms;  // for specfic form use forms[0] acces form first
// a = document.links;
// a = document.links[0].href;
Array.from(a).forEach(function(element) {          // converting html collection it into arrays
    console.log(element);
});

// let arr =[3,5,3,6,0,9];
// arr.forEach(function(element, index, array){
//     console.log(element, index, array);
// })


a = document.images;
a = document.scripts;
// console.log(a);


let myArray = [{"child": ["one", "two", "three", "four"]}, 
               {"child": ["five", "six", "seven", "eight"]}];

for(let i = 0; i < myArray.length; i++){

   let childArray = myArray[i].child;

   for(let j = 0; j < childArray.length; j++){

  console.log(childArray[j]);

   }

}

// _.forEachRight([1, 2], function(value) {
//     console.log(value);
//   });