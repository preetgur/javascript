console.log('This tut is about setTimeout and setInterval in js:');

// runs piece of code after some time frame.

// let timeoutId = setTimeout(function, milliseconds);


setTimeout( () =>{
    console.log('Greetings from setTimeout');
        },1000);

// using function expression
let message = () => {
    console.log('Greetings using function Expression');
}

setTimeout(message,4000);

// how to set timeout and cancel timeout
let tID;
let setTime = document.getElementById('setTimeout');
setTime.addEventListener("click",()=>{
    console.log('Clicked on Set');

    tID =setTimeout( ()=>{
        console.log('From Timeout');
        
    }, 6000);
    
});

let cancelTime = document.getElementById('cancelTimeout');
cancelTime.addEventListener("click",()=>{
    console.log('Clicked on cancel');
    clearTimeout(tID);
    
});

// asynchronous

console.log('1');
console.log('2');
setTimeout(()=>{
    console.log('3');
    
},1000)
console.log('4');
console.log('5');


// set interval  : runs the code after every given time.

// let timeout = setInterval(function, milliseconds)

let setIntervalID =setInterval(()=>{
    console.log('Set Interval after :2000');
    
},2000);

// clear interval
let cancelInterval = document.getElementById('cancelInterval');
cancelInterval.addEventListener("click",()=>{
    console.log('Clicked on stop Interval');
    clearTimeout(setIntervalID);
    
});