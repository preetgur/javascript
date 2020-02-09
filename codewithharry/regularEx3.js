console.log('Thi tut is about character set in js:');


// const reg = /^harry/i;

// let reg =/h[a-z]rry/;
let reg =/h[xyz]rry/;   // any character matched [xyz] in given str then matched

/*
/ha[ryz]rry/  => matched( can be r ,y and z) :: either r y z
ha[a-z]rry  => mathced (can be any character bw a to z)

ha[dkm]rry  => does not matched
*/
 reg = /h[^xyz]rry/;  // any charcter but not having any one of them (xyz)  :: not having x y z

 reg = / h[^xyz]rr[ynm]/ ;

 reg = /h[a-zA-Z]rr[kYl0-9][0-9]/;
// const str = " hGrrY2 bai ";

// Quantifiers
reg = /har{2}y/; // r can occur exactly 2 times
reg = /har{1,2}y/; // r can occur bw 1 to 2 times


//Grouping we use paranthesis for grouping ()
reg = /(har){2}/;   // har : can occur two times like :harhar

reg =/(har){2}([0-9]r){2}y/
let str = "harry bhai";
//  str = "harharry bhai";
 str = "harhar1r2ry bhai";


let result = reg.exec(str);
console.log('The result from exec is ',result);

if(reg.test(str)){
    console.log(`The String ${str} is matched with ${reg.source}`);
    
}
else{
    console.log(`The String ${str} does not matched with ${reg.source}`);
    }


