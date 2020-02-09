console.log("This tut is about promise in javascript :");

// Promises : resolve, pending, reject

function fun1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const error = true;
            if(!error){
                console.log("Function : Your promise has been resolved:");
                resolve();
            }
            else{
                console.log("function : Your Promise has not been resolved:");
                reject("::Sorry not fulfiled :");    // This is grab in catch(function(error))
            }
        },2000);
    })
}

fun1().then(function(){
    console.log("If Resolve This will run");
}).catch(function(error){
    console.log(" If Error  occured This will run " +error );
})

console.log(" Print first: Promise is used as alterantive to callback funciont");



// enrollStudent(newStudent).then(getStudents).catch(function(){             dirctlyl usign function name
//     console.log("some error occured :");
// });

// #######################################3
console.log("This tut is about callback in js");

const students = [                         
    {name: "Gurpreet", subject: "javascript"},
    {name: "Rohan", subject: "Machine learning"}
]

// let newStudent = {na me:'sunny', subject:'Python'}
// enrollStudent(newStudent);

function enrollStudent(objStudent) {  

    return new Promise(function(resolve1,reject1){

        setTimeout(function () {
            students.push(objStudent);
            console.log("************ Promise in place of callback fucntion");

            console.log("Student has been enrolled");
            const error = true;
            if(!error){
                resolve1();  // run in "then"
            }
            else{
                reject1();   // run in "catch"
            }
        }, 4000);
    })
   
}

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (element) {
            str += `<li>${element.name} </li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 6000);
}


let newStudent = {name:'sunny', subject:'Python'}
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("some error occured :");
});

// Function inside then is run as - resolve()
//  function inside catch is run as - reject()