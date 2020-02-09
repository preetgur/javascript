console.log("This tut is about event : ");

document.getElementById('heading').addEventListener('click',function(e){
    console.log("You just clicked on the heading :");
    // location.href ='//codewithharry.com';
    console.log(e);
    console.log(e.target);
    console.log(e.target.firstChild);
    console.log(e.target.classList);
    console.log(e.target.className);

    let variable = Array.from(e.target.classList);
    console.log(variable);
    
    varible1 = e.offsetX;
    console.log(varible1);

    varible2 = e.offsetY;
    console.log(varible2);

    varible3 = e.clientX;
    console.log(varible3);

    varible4 = e.clientY;
    console.log(varible4);

});