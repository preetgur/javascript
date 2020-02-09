console.log("Excersie In js :");

str = "javascript";
let a = document.links;
console.log(a);
let hr;

Array.from(a).forEach(function (element) {

    hr = element.href;          // print all the  links and target to href of links
    if (hr.includes(str)) {
        console.log(hr);
    }
});

{

let a= "sitemap" ;                       // Search for the string
let links = document.links;                // Fetch the links
let hr ;
Array.from(links).forEach(function(e){       // Fetch the all the links using foreach loop
    

// console.log(e)   prints all the links like :<a href="http://www.nic.in/" target="_blank"> </a>   
// console.log(e.href)    in this we target the href of links & get :  http://www.nic.in/

hr = e.href;


if (hr.includes(a)){
console.log(hr);
}
});

}

    // let links = document.links;
    // let str = "javascript";

    // for (let i = 0; i < links.length; i++) {
    //     let val = links[i];
    //     if(val['href'].includes(str)){
    //         console.log(val['href']);
    //     }
        
    // }