console.log("Introduction to ES6 Class:");
console.log(" ctrl+shif+i : open console:");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;   //object = given
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and i recently joined this company as ${this.division}`;
    }

    joiningYear(){
        return (2019 - this.experience);
    }

    // static method :call without creating object for class

    static add(a,b){
        return (a+b);
    }

}


Gurpreet = new Employee("Gurpreet Singh", 2, "Software Developer");
console.log(Gurpreet);
console.log(Gurpreet.slogan());
console.log(Gurpreet.joiningYear());
console.log("static call :",Employee.add(12,24));


// Inheritance 

class Programmer extends Employee{

    constructor(givenName,givenExperience,givenDivision,language){
        super(givenName,givenExperience,givenDivision); // calling the parent class constructor
        this.language= language;

    }

    favoriteLanguage(){
        if(this.language == "Python"){
            return "Python";
        }
        else{
            return "javaScript";
        }
    }
 // not make use of this in static
    static multiply(a,b){
        return a*b;
    }

}

rohan = new Programmer("Gurpreet",2,"Software Developer","Python");
console.log(rohan);
console.log(rohan.slogan());

console.log(rohan.favoriteLanguage());
console.log(Programmer.multiply(4,5)); // static method