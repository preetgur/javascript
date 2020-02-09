console.log('This tut is about Array Methods in js:');

 // Array.flat(), flatMap(), reduceRight(), copyWithin()


 {
     // Array.flat()

 let matrix = [ [1,2,3],[4,5,6] ];

 // flat convert n-dimensional array into single array
 // flat(deep-level)
 let flatArray = matrix.flat(1);
 console.log(flatArray);
 
 let complexMatrix = [4, [1,3,5],[1,[[[[3]]]]]];
 // when don't know how deep is ti : use flat(infinity)
 console.log("Deep Matrix :",complexMatrix.flat(Infinity));
 
 let total = complexMatrix.flat(Infinity).reduce((a,v) => a+v,0);  
 //a:accumulator and v : value and defalut value is 0;
 console.log('Total of Array :',total);
 
}

{
    // Array.faltMap()

    let nums = [1,2,3];
    let strs = ["one","two","three"];

    // let mapped = nums.map( (val,index) => [val,strs[index]])
    let mapped = nums.flatMap( (val,index) => [val,strs[index]])

    console.log(mapped);
    
}

{
    // Array.reduceRight()
    // reduce : convert into string : read from left to right

    let strs = ['t',5,'s','e','b'];
    
    let best = strs.reduce((c,v) => c + v);
    console.log(typeof best ," : ", best);

    best = strs.reduceRight((c,v) => c + v);
    console.log(typeof best ," : ", best);

}


{
    // copy within : copy some elements within the array
    //copyWithin(starting index, start copy from index, end copy index)

    let nums = [0,1,2,3,4,5,6,7,8,9];
    console.log("Basic arraay",nums);

    // nums.copyWithin(0);  // mutate the array
    // nums.copyWithin(1);  // mutate the array :by shifting from index one.
    // nums.copyWithin(2);   // copy from index 2

    nums.copyWithin(2,4,9);
    console.log(nums);
    
}