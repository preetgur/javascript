// Difference bw javascript object and json


// JSON - main purpose for data sharing in "Key":value format. JSON key always covered with double quotes "". Key name can be any valid string contains space, _ - even special chars. But try to avoid it for harder access. I am preferring _ underscore format.

// JSON value supports 6 data types String, Numbers, Objects, Arrays, Boolean and special value null.

// JavaScript Object - can be any valid JavaScript structure. It's not necessary to cover key with double quotes. Example var obj = { name:"Kishorkumar", "sal":function () {return 300000;}, "city":"Pune"};

// JavaScript Object value can be any data type including function see above example.

// Some useful functions while dealing with JSON and JavaScript Object.
 
// JSON.parse() - converts JSON data into JavaScript Object.   :: retrive data

// JSON.stringify() - converts JavaScript Object to String JSON Object. :: storing data

/*
JSON : stands for javascript object notation. It is basically atext format that makes it easy to share data between devices such as clients and server.
*/

// Json Example

let obj = 
{
    "name" : "Gurpreet Singh",
    "languge" :"Html,css ,js",
    "hobies " : "Balling"
}

// Unlike JavaScript Object, a JSON Object has to be fed into a variable as a String and then parsed into JavaScript.

  /*#Another good advantage of JSON is the ability to pass the value or data into a JavaScript object. This can simply be done using a JavaScript command as shown below.
*/
  let data = JSON.parse(obj);

 /* So, say you were to get the name value, all you would do is simply type:
*/
    data.name; // Using the dot notation.

    data["name"]; // Using the bracket notation


// javascript values on the other hand can be any  valid javascript structure.

let abc = {
    firstname : "Gurpreet",
    "course" : "Btech"
}

/* In the snippet above, you would notice that the keys are not wrapped in quotes. This is a typical example of a JavaScript Object. JavaScript Object values can be any datatype including a function (which you CANNOT do with JSON.) */

// This is the javascript object not the json becaue it cantains the fuctions
let obj1 = {
	"name": "Gurpreet Singh",
	"course": "Btech/cse",
	add: function() {
		alert(this.name);
	}
}  
console.log(obj1);


// This is json
let hi = {
	"name" : "Gurpreet Singh",
	"course":"Btech/cse",
	"marks" : 45

}



