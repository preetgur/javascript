console.log('This tut is about recursion in js');

// Recursion : when a fucntion call itself from its own body


// Basic recursion
let x = function()
{
    x();
}

// For loop

let total = 0 ;
for(let i = 1; i<=3; i++)
{
    total += i;
}
console.log(total);


let add = function(n)
{
    if(n<=0)
    {
        return 0;
    }
    else
    {
        return n + add(n-1);
    //  return 3 + add(3-1);  
    //  return 3 + 2 + add(2-1);  
    //  return 3 + 2 + 1 + add(1-1);  
    //  return 3 + 2 + 1 + add(0);  
    //  return 3 + 2 + 1 + 0;   => 6

    // return holds all the value untill condition is not matched or false
 
    
    }
}


console.log(add(3));
