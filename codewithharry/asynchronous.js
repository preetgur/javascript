console.log("This tut is about asynchronus Progamming :");

/*  asynchorous programming : multiple things happen at the same time ;

Few ways to write asynchronous progarmmming in js:
   1.  Async/ await
   2. callbacks
   3. promises

*/{
console.log(" ***********Synchronus programming")

for (let index = 0; index <45; index++) {
    const element = index;
    console.log(" this is index number "+ index);

    
}

console.log("done printing");
}

{
console.log(" ***********Asynchronus programming")
 
setTimeout(() => {
    for (let index = 0; index <45; index++) {
        const element = index;
        console.log(" this is index number "+ index);
    
        
    }
},100);

console.log("done printing : Asynchronous");

}