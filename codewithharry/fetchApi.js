console.log("This tut is about Fetch api in js:");

// Button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
let content = document.getElementById("content");

// function getData() {
//     console.log("Started getData ");
//     url = "ajax.json";
//     fetch(url).then((response) => {
//         console.log("Inside First Then :");
//         return response.json();  // response.text()
//     }).then((data) => {
//         console.log("Inside Second then :");

//         Array.from(data).forEach((element) => {
//             // console.log(element);
//             let html = `${element.Firstname} and ${element.Lastname} and ${element.Address}`;
//             console.log(html);

//         })
//     })
// }

// Get request
function getData() {
    console.log("Started getData ");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside First Then :");
        return response.json();  // response.text()
    }).then((data) => {
        console.log("Inside Second then :");
        console.log("Directly using recieved data :");
        console.log(data);


        console.log("Converted the received data into array and apply for each loop using recieved data :");
        let htmlData = "";
        Array.from(data).forEach((element) => {
            // console.log(element);
            html = `Login as :${element.login} and its id as :${element.id} \n`;
            // console.log(html);

            htmlData += html;
            // if we use this as    htmlData = html; then it will print only the single latest data that it contains


        })
        console.log(htmlData);
    })
}


console.log("Before running getData");
getData();
console.log("After running getData");





// Post request
function postData() {

    url = "http://dummy.restapiexample.com/api/v1/create";
    data = "{name: 'Gurpreetingh', salary : 250000, age : 22 }"

    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)   // sending the data if already in string then remove stringify
    }
    fetch(url,params).then(response => response.json())
    .then(data => console.log(data2))

}

postData();
