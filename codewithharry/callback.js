console.log("This tut is about callback in js");

const students = [                         
    {name: "Gurpreet", subject: "javascript"},
    {name: "Rohan", subject: "Machine learning"}
]

// let newStudent = {name:'sunny', subject:'Python'}
// enrollStudent(newStudent, getStudents);


// This  function is automatically called after 8000 miliseconds : you can use any name of function
function enrollStudent(objStudent, callbackf) {  
    setTimeout(function () {
        students.push(objStudent);
        console.log("Student has been enrolled : 'enrollStudent is run' ");
        console.log("Now again run the getStudents using callback function: and this fucntion excuted after 5 seconds as defined in function ");
        callbackf();      // This fucntion calls the getStudents function as callback
    }, 10000);
}

// First this fucntion is run because time :10000
function getStudents() {     
    setTimeout(function () {
        let str = "";
        students.forEach(function (element) {
            str += `<li>${element.name} </li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
        console.log("After 5000 miliseocnd this function is called automatically with the help of callback function");


    }, 5000);
}


let newStudent = {name:'sunny', subject:'Python'}
enrollStudent(newStudent, getStudents);                        // callback function

console.log("First of all This function is called as normal: and executed after 5 seconds as defined in function");
getStudents();