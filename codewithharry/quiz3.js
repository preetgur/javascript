console.log("Excercise 2");
// must use peek reference in vs code 

/*
you have to create a div and inject it into the page which contians heading. (and inserting div befor the particular given id/ class)
Whenever someone clicks on the div it should be converted into an editable item.
whenever user clicks away (blur). save the note into the local storage. 
*/

{
    // create div Tag
    let div = document.createElement("div");
    div.id = "divid";
    div.className = 'divclass';
    div.setAttribute('style', 'border:2px solid black; width :150px; margin :54px;');

    // text = document.createTextNode("This Div block is created in order to complete Excersive 2");
    // div.appendChild(text);

    // Get text from local storage using if else     
    //  key :'text'  value:'textarea.val'

    let text;
    let val = localStorage.getItem('text');  // First check local Storage 
    if (val == null) {
        text = document.createTextNode("This Div block is created in order to complete Excersive 2");

    }
    else {
        // if text is already present then fetch it from local Storage
        text = document.createTextNode(val);
    }
    div.appendChild(text);
    // Grab the main container
    let container = document.querySelector('.container');
    let child = document.getElementById('first');

    // Insert the div tag before element with id first
    container.insertBefore(div, child);

    // add event listener to the div
    div.addEventListener("click", fun_click);

    function fun_click(e) {
        console.log(e);
        let noTextAreas = document.getElementsByClassName("textarea").length;

        if (noTextAreas == 0) {
            //if their is no text in text area then use the div tag text as defined while creating the element

            let html = divid.innerHTML;   // Fetch the text from div tag (using id) and store in varible

            // by default we can edit the text area 

            div.innerHTML = `<textarea class="textarea" id="textarea" cols="10" rows="10">${html}</textarea>`;
            // inside a div tag we create a textarea tag with id/class as textarea 
        }

        let textarea = document.getElementById('textarea');
        textarea.addEventListener('blur', function () {

            divid.innerHTML = textarea.value;   // get the upadated content from text area

            // saving it to the localstorage
            localStorage.setItem("text", textarea.value);
        });
    }


}
