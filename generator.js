console.log('this tut is about generator');
 
// Iterator
{
console.log('****** Iterator ******');

// Array as all the value 
let i = [1,2,3,4];

let iterator = i[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


}


// Dynamically produce value in generators
console.log('****** Generator ******');

function *generator()
{
// Value are produced using yeild when calling the next() 
yield 1;
yield 2;
yield 3;
yield 4

};

let iterator = generator();

 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 console.log(iterator.next());
 

 // infinite generator

 console.log('****** Infinite Generator ******');
 
 function *infiniteMaker()
 {
     let i=0;
     while(true)
     {
         yield i;
         i++;
     }
 }

 let iterator2 = infiniteMaker();

 console.log(iterator2.next());
 console.log(iterator2.next());
 console.log(iterator2.next());
 console.log(iterator2.next());
 

 console.log('Calling one generator inside the other');
 
 function *one()
 {
     yield 1;
     yield *two();
     yield 3;
     return "This is the last value because of return stmt";
     yield 4;
     yield 5;

 };

 function *two()
 {
     yield 2;
 };

 let iterator3 = one();

 console.log(iterator3.next());
 console.log(iterator3.next());
 console.log(iterator3.next());
 console.log(iterator3.next());
 console.log(iterator3.next());
