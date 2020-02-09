console.log('This tut is about call, apply and bind function:');

let add = function (c)
    {
    console.log(this.a+ this.b +c);
    };

let obj = {
    a : 1,
    b : 2
        };
add.call(obj); // if there is not c then write it as
add.call(obj, 3);


// In  javascript you not need to call arguments because it include by default
let args = function(a,b,c){
    console.log(a+b+c);
    
} 
args("one",4,9);
console.log(typeof args);

// write without arguments

let argsToArray = function(){
 console.log(arguments);
};

argsToArray(1,"hello",4);
console.log(typeof argsToArray);

// it gives me array like object (not the array)
// it prototype is object


{
// converting this object to array
let argsToArray = function(){
    // console.log(arguments);
    console.log([].slice.call(arguments));
    // adding arguments into the array
   };
   
   argsToArray(1,"hello",4);
}


// call base constructor from sub constructor

let mammal = function(legs){
    this.legs = legs;
}

let cat = function(leggs, isDomesticated){
    mammal.call(this, leggs);
    this.isDomesticated = isDomesticated;
}

let lion = new cat(4,false);
console.log(lion);


// Apply


// unlike call Where you pass arguments
// apply will take array in arguments : converted  array into regular arguments

let numArray = [1,2,5];
console.log(Math.min(1,2,5));
console.log(Math.min(numArray));
console.log(Math.min.apply(null,numArray));


// bind :

let button = function(content){
    this.content = content;
};

 // This click function is loose bound to new Button
button.prototype.click = function(){
    console.log(`${this.content} clicked`);
    
};

let newButton = new button('add');

// click function is now not bound to loose click : its show undefined
let looseClick = newButton.click;
looseClick();  // undefined click

let boundButton = newButton.click.bind(newButton);
boundButton();


//

let myObj = {
    asyncGet(callback){
        callback();
    },
    parse(){
        console.log('Parse called');
        
    },
    render(){
        // that = this;  :render this
        // this.asyncGet(function(){ // global this
        //     that.parse();
        // })   or
        this.asyncGet(function(){
            this.parse();
        }.bind(this)); 
        // it binds the outer this to inner this
    }
}

myObj.render();