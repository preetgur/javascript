console.log("This tutorial is about the Strings: properties , method and template leterals");

const name = "Gurpreet Singh";
const greeting = "Good Morning,";
console.log(greeting+' '+name);

let html1;
html1 = name + greeting;
console.log(html1);

html = "<h1> This is heading</h1>" +"<p>hi, everyone</p>";
console.log(html);

html2=html.concat(" My name is Gurpreet Singh"," and i am a btech graduate");

let html4;
html4 = html1.concat("Concatenate using methdod",name,greeting)
console.log(html4);


console.log(html2);

console.log(html2.length);
console.log(html2.toLowerCase());
console.log(html2.toUpperCase());

console.log(html2[1]);

console.log(html1.indexOf('Singh'));
console.log(html1.lastIndexOf('Singh'));
console.log(html2.charAt(3));
console.log(html.endsWith(">"));
console.log(html2.endsWith("graduate"));
console.log(html.includes("Gurpreet"));
console.log(html2.includes("Gurpreet"));
console.log(html.substring(0,30));
// substring and slice are exactly same but when we give a negative value then there is different output
console.log(html.slice(0,30));
console.log(html2.slice(-5));
console.log(html.split(' '))
console.log(html.split('>'));
console.log(html2.replace('Gurpreet','Preet'));

// use any of the following
// \' or \" is used in oder to prevent error because string is declared under " " or ' '
let fruit1 ="orange' "; 
 fruit1 ='orange" '; 
 fruit1 ="orange\" "; 
 fruit1 ='orange\' '; 
 fruit1 ='orange@ '; 
 fruit1 ='orange^ '; 


let fruit2 = 'apple';
let myHtml = `Hello ${name}
            <h1> Gupreet Singh, </h1>
            <p> Do you like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML= myHtml;