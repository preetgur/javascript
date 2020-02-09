console.log('This tut is about currying function in js');

// one fxn return another fxn
{

let add = function(a)
{
    return function(b)
    {
        return a+b;
    }
}

let addToFive = add(5);

console.log(addToFive(4));

}

// spread operatore deals with array
{
    let avg = function(...n)
    {
        let tot = 0;
        for(let i=0; i<n.length; i+=1)
        {
            tot += n[i];
        }
        console.log('avg fxn , addition of all array:', tot);
        console.log('Length of array :',n.length);
        
        
        return tot/n.length;
    };

    // fn is the callback fxn which is : avg
    let spiceUp = function(fn, ...n)
    {
        return function(...m)
        {
            return fn.apply(this, n.concat(m));
        }
    };

    let doAvg = spiceUp(avg, 4,4,4);
    console.log(" ****Without Concatenate :",doAvg());
    
    console.log("****After conctenate",doAvg(2)); // array with one element
    console.log(doAvg(2.5,7)); // pass array with 3 elements
    
}


// crazy example

{
 let sayWhat = function(a)
 {
     return function(b)
     {
         return function(c)
         {
            //  console.log("Saying "+ a +" to "+ b +" using "+ c);
             console.log(`saying ${a} to ${b} using ${c}`);
             
             
         }
     }
 };

// also call this way
 sayWhat("Hello")("Friends")("javascript");

 // other way

 let sayHi = sayWhat("hi");
 let sayHiToMe = sayHi("me");
 let sayHiToMeUsing = sayHiToMe("nothing");


}