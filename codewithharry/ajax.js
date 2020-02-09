
console.log("This Tut is about Ajax :");

/* 
AJAX : stands for Asynchronous  JavaScript and XML
It is not Programmimg language.
No page reload/ refresh

Why use Ajax?
No page reload/ refresh
better user experince
saves network bandwidth
very interactive

how it works ?

Ajax use XMLHttpRequest object (also calleed xhr object) to achive this.
Modern websites use Json instead or Xml for data      transfer we can also use text ,html
Data can be transfered in any format and protocal 


*/

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

// on click run the function

function buttonClickHandler(){
    console.log("You just clicked the Fetch btn :");

    // intantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object  
    // GET : means fetch only
    // Post : means send data and fetch data

    // xhr.open("GET","ajax.txt",true);

    // Post data
    xhr.open("POST","http://dummy.restapiexample.com/api/v1/create",true);
    xhr.getResponseHeader("Content-type",'application/json');   // for post

    // what to do on progress  (optional)
    xhr.onprogress = function(){
            console.log("on progreess");
           

    }

// xhr.onreadystatechange = function(){
//     console.log('ready state is',xhr.readyState);
// }

    // what to do when response is ready
    xhr.onload = function(){
        if(this.status == 200){
            console.log(this.responseText);

        }
        else{
            console.log("Some error occured.")
        }
    }

    // send the request
    data =` {"name":"Gurpreet Singh" , "salary":"300000","age":"23"}`;  // for post
    xhr.send(data);
}

// http://dummy.restapiexample.com/api/v1/employees

let popbtn = document.getElementById("popBtn");
popbtn.addEventListener('click',popHandler);

function popHandler(){
    console.log("You just clicked the Populate btn:");

    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees",true);

    xhr.onprogress = function(){
        console.log("On Progressing :");

    }

    xhr.onload = function(){
        
        let obj = JSON.parse(this.responseText);

        console.log(obj);

        let list =document.getElementById("list");

        str = "";
        for (i in obj){
            str +=`<li> ${obj[i].employee_name} <li>`;
            // <li> ${obj[i].employee_salary} <li></li>
        }
        list.innerHTML = str ;

    }

    xhr.send();
}



// For json btn 
let jsonBtn = document.getElementById("jsonBtn");
jsonBtn.addEventListener("click",josnHandler);

function josnHandler(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","ajax.json","true");

    xhr.onload = function(){
        let obj =this.responseText;
        obj = JSON.parse(obj);    // converting json data into javascript object
        // console.log(obj.Firstname);

        let list =document.getElementById("list");
        // list.innerHTML = obj.Firstname +" "+obj.Lastname+" "+ obj.Address;

        str = "";
        for (i in obj){
            str +=`<li> ${obj[i].Firstname} ${obj[i].Lastname}, Address : ${obj[i].Address} <li>`;
        }
        list.innerHTML = str ;

    }

    xhr.send();
}