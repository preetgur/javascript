console.log("Quiz Tut");

// create heading element with text a "go to codewithharry" and create  a tag outside with href= "https://www.codewithharry.com"

let element = document.createElement("h1");
element.id = "element";
element.className = "element";

let text = document.createTextNode("Go To codewithharry:");
element.appendChild(text);                 // element (means heading) having Text (go to codewitharry) so :: element.appendChild(text) 
                                   
let create = document.querySelector("div.quiz");        // select div tag with id quiz
create.appendChild(element);

console.log(element);

{
    let element = document.createElement("link");
    element.id = "href1";
    element.className = "href1";
    element.href = "www.codewithhary.com";
    // element.value = "please click";
    // element.setAttribute = ("value","Click");



    let create = document.querySelector("div.quiz");
    create.appendChild(element);


    console.log("href link ::"+element);


}
