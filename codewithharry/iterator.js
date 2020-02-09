console.log("This tut is about iterator i js:");

// Iteraotrs

function fxnIterator(values){
    let nextIndex = 0;
    return {
        next: function(){ 
            // values.length gives the length of array
            if(nextIndex < values.length)
            {
                // we will return below object
                return{
                    value : values[nextIndex++],
                    done : false
                }
            }
            else
            {
                return{
                    done:true
                }
            }
        }
    }
}

//Array
const myArray = ['Apple','orange','banana'];
console.log('This is Array ' ,myArray);


// how to call iterator

let iterator = fxnIterator(myArray);
console.log('Value of iterator',iterator.next());
console.log('Value of iterator',iterator.next().value);
console.log('Value of iterator',iterator.next().value);
console.log('Value of iterator',iterator.next());
