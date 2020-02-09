console.log("This tut is about loops:");

console.log("for loop:")
for(let i=0; i<=10;i++){               // intialize ,codition, increment in one place
    console.log(i);
}

console.log("While loop:");
let j=0;                             // initalize
while(j<=10){                        // conditon
 console.log(j);
//  j=j+1;                              // increment
j++;
}

console.log("Do while loop :");

let k=0;                                          // initialize

do{
    

    console.log(k);
    k=k+1;                                     // increment
}
while(k<=10);                                   // condition

console.log("Break and continue stmt in js :");

{ 
    let k=1;              // initialze

    do{                        // Increment
        if(k===3)                        
        {  
            console.log("Skip Three :");
            k=k+1;

            continue;

         }
         else if(k===8){

            console.log("Terminate loop from eight :");
             break;
         }
        console.log(k);
        k=k+1;
    }
    while(k<=10);         // condition

}

// break and continue
// break means terminate that loop
// continue means skip that value and remains in that loop

console.log("<!--- Arrays--->")
let arr =[3,5,3,6,0,9];
arr.forEach(function(element, index, array){
    console.log(element, index, array);
})

console.log("other Method to traverse arrays");
for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("iterate object using loops");

let obj = {
    "Full name" : "Gurpreet Singh",
    age : 22,
    course : "B.Tech/cse",
    positon : "Web developer"
}
for(let i in obj){
    console.log(`The ${i} of object is ${obj[i]}`);
}

// let ab;
// Array.from(obj).forEach(function(element){
//     ab=`For each ${element.age}`;
    
// });
// document.body.innerHTML = ab;