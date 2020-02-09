console.log('This tut is about genertor in js:');

function* numbersGen(){

    let i = 0;

    // yield 1;
    // yield 2;
    // yield function sum() {console.log('Adding of two digit is')};

    while(true){
        yield i++
    }

}

const gen = numbersGen();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next());
console.log(gen.next());


// console.log(gen.next().value);
// console.log(gen.next().done);
// console.log(gen.next().value);


