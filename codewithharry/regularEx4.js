console.log('This tut is about shorthand in regular expression');


//character classes

let reg = /\war\w/;  // word character(\w) => _ or alphabet or number

reg = /\w+0137/;   // \w+ => one or more word character
reg = /\Wbhai/;     // W => now word charater (means bland, special character like # @ &)

reg = /\W+bhai/;  // \W+ => more than one non word character

reg = /\d8141/;  // \d => for any (single ) digit
reg = /number \d+/;  // \d => for more than one digit

reg = /\D01/;  // \D=> for non digit (single)
reg = /\D+01/;  // \D+ => for  more than one non-digit 

reg = /\ska number 98141/;  // \s => match white space or tab(\t)
reg = /\s+ka number 98141/;  // \s => match one or more white space or tab(\t)

reg = /\Sbhai ka number/;   //  \S => means non white space  (match one non white space character)
reg = /\S+bhai ka number/;   //  \S+ => means more than one  non white space 

reg = /bhai\b/;  // word boundary => next word start

// let str = "harry0137@bhai";

// Assertions
reg = /h(?=y)/;   // (?=y) => means after h their should be y

reg = /h(?!y)/;   // (?!y) => means after h their should not be y

let str = "harry0137$%%^@bhai ka number \t 981414343 991420 preet013 hye";




let result = reg.exec(str);
console.log('The result from exec is ', result);

if (reg.test(str)) {
    console.log(`The String ${str} is matched with ${reg.source}`);

}
else {
    console.log(`The String ${str} does not matched with ${reg.source}`);
}


