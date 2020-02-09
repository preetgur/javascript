console.log("Create Or remove element ");
console.log("<!--- Create Element With js --->");

let element = document.createElement("li");
console.log(element);

let text = document.createTextNode('I am a node');  // This is alternative to line no 12
element.appendChild(text);
// Add class name , id, attribute, text to li element 
element.className = "childLi";
element.id = "createdLi";
element.setAttribute("title", "mytitle");
// element.innerText = "Hello This is created by Gurpreet";
// element.innerhtml = "<b>hello This is created by Gurpreet </b>";

// Append to the the specified tag (ul) with class name (this)
// queryselector selects only first child

let ul = document.querySelector('ul#secondul');   // single selector
ul.appendChild(element);
console.log(ul);
console.log(element);


{
console.log("<!--- Replace Element With js --->");
let element2 = document.createElement('h3');
element2.id = 'element';
element2.className= 'element';

let textnode = document.createTextNode("This is text is replaced with heading using  'replaceWith' method: ");

element2.appendChild(textnode);
// replace element   : select div tag with class name as "div2"
let a = document.querySelector('h1#heading'); // replace div block
// console.log(typeof a);   : object

a.replaceWith(element2);
console.log(a);

console.log("<!--- Seocnd Replace --->");
// let id = document.getElementById('firstul');    
// select tag with id 'firstul'
let parent = document.querySelector('ul#firstul'); // select parent
// console.log(id);     // Element should be child of parent  
let child =document.getElementById("thirdli");
parent.replaceChild(a,child );


// ul as id = firstul and its child has id as = secondli and we replace it with a

// id.replaceChild(a,document.querySelector('div#first') );  gives an error because node was not found


console.log("Remove element ")
// id.removeChild(document.getElementById("thirdli"));

console.log("<!-- Get id of  varibles using following -->: ");
let pr =  parent.getAttribute('id');
let pr2 = parent.getAttribute('class');
console.log(pr,pr2,parent);
let pr3 =parent.hasAttribute('class');
let pr4 =parent.hasAttribute('clasds');

parent.removeAttribute('id');
element = parent.setAttribute("id","createdli")
element = parent.getAttribute('id');
console.log(pr3,pr4 ,element);
}