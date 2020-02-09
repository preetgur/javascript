console.log("This tut is about event 2 : ");

let btn = document.getElementById("btn");
btn.addEventListener("click",fun_click);

btn.addEventListener("dblclick",fun_dbclick);
btn.addEventListener("mousedown",fun3);


function fun_click(e){
    msg = "Thanks a lot";
    console.log(msg,e);
    e.preventDefault();
    console.log(e.srcElement.value);
}

function fun_dbclick(e){
    console.log("Thanks it is a double click :");
    e.preventDefalut();

}

function fun3(e){
    console.log("Thanks its a mouse down");
    e.preventDefalut();
}

document.querySelector('.div2').addEventListener("mouseenter",function(){
    console.log("You Hower on it :");
});

document.querySelector('.div2').addEventListener("mouseleave",function(){
    console.log("You leave it :");
});

// document.querySelector('.container').addEventListener("mousemove",function(){
//     console.log("You Trigger mouse event:");
// })

document.querySelector('.container').addEventListener("mousemove",function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetX*e.offsetY/45})`;
    console.log("You Hower on it :");
});