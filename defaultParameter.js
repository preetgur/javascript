console.log('This tut is about Default Parameter in js');

//simple  fxn with arguments but no parameters

let add = (a,b) => { return a+b};
console.log(add());   // returns NaN

// how to handle this

{
    let add = (a,b) => {

        if(a === undefined)
        {
            a = 0;
        }
        if(b === undefined)
        {
            b = 0;
        }
        return a+b;
    };
    console.log(add());   // returns 0+0 = 0;

}

// Better way to write above as
{
    let add = (a,b) => {
        
        a = a || 0 ; // if a has value than a=a otherwise it is zero.
        b = b || 0 ;

        return a+b;
        // or write above as 
        // return (a || 0) + (b || 0);
    };
    console.log(add());
    console.log(add(1));   // a=1 and b= undefined
    console.log(add(undefined,7)); // a= undefined and b = 7

}


// Es6

{
 let add = (a = 0,b = 0) =>{
     return a+b;
 };
 console.log("Es6 :",add());
 
}

{
    let add = (a = 0,b = a) =>{
        return a+b;
    };
    console.log("b=a :",add());
    console.log(add(1));           // returns 2
    console.log(add(undefined));   // returns 0
    console.log(add(undefined,1));  // returns 1 : because passing the value of b and then it forgot the default arguments
    
    
   }

   // In case of Arrays
   {
    let add = (a = [],b = []) =>{
        return [...a, ...b];  // merge arrays
    };
    console.log("Array:",add());
    console.log(add([2,4]));
    console.log(add([2,4], [3,6,8]));
    
   }

   // In case of objects

   // Es5
   {

   let x = { a:1, b:5 };

    let add = (obj) =>
    {
        return obj.a + obj.b;  // Add
    };

    // console.log("Object default :",add()); // throw error
    console.log("Object Adding :",add(x));
    
    }

    // When default parameter

    {
        let x = { a:1, b:5 };

        let add = (obj) =>
        {
            obj = obj || {};
            let a = obj.a || 0;
            let b = obj.b || 0;
            return a+b;
        };
        console.log("Object default :",add());
        console.log("Object :",add(x));

    }

    // Beter way to do : Es6
    {
        let x = { a:1, b:5 };

        let add = ({ a = 0, b =0} = {}) =>
        {
            return a+b;
        };
        console.log("Object default Es6 :",add(x));
    }