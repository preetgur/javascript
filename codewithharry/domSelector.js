console.log("This tut is about Dom Selector :");

// Single element selector
console.log("<!---- Single selector ---->");

let element = document.getElementById('first');
// console.log(element);

// console.log(element.className);
// console.log(element.childNodes);
// console.log(element.parentNode);

element.style.color = "red";

element.innerText = "Gurpreet is Web Developer: ";
element.innerHTML = "Gurpreet is <mark>Web Developer</mark>";
// console.log(element.innerText);
// console.log(element.innerHTML);

let sel = document.querySelector('#first');   //id
// console.log(sel);

sel = document.querySelector('.child');    // select child class which apperars as first 
// console.log(sel);

sel = document.querySelector('mark');   // select by tagname
// console.log(sel);


sel = document.querySelector('div');  // select first div block
console.log(sel);

sel.style.color ="green";
console.log(sel);

console.log("<!---- Multi selector ---->");

    
{
    let element = document.getElementsByClassName("child");
    console.log(element);
    console.log(element[1]);    // select first class
}

{
    console.log("<!-- Get elment By classname --->");
    
    let element = document.getElementsByClassName('container');
    // it gives the html collection whose class is :"container  : we have 3 container class"
    console.log("Element whose class name is container",element);
    
    console.log(element[0].getElementsByClassName('child'));
    // element[0] represents first div whose class is container and then get the element inside this whose class is name is 'child'
}
{
    console.log("<!-- Get elment By Tagname --->");
    let element = document.getElementsByTagName("ul");
    console.log(element);
}

{
    console.log("<!-- Iterate html content --->");
    let element = document.getElementsByTagName("div");

    Array.from(element).forEach(function(element)
    {
        console.log(element);
        element.style.color = "green";
    });
}