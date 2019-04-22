//use in google chrome rather than live preview http://localhost/ajax-test/

//instead of loading like it's supposed to we the pages to load the content (not go to their respective pages)

//get references to the html elements: 
const navItems = document.querySelectorAll("header nav ul li a");
//this collects the two links: portfolio and home 

const container = document.querySelector(".container");

//using relative path 
let path = "http://localhost/ajax-test/content/home.html";

function handleClick(ev) {
    //prevents link from redirecting, cause we want it to load on the page  
    ev.preventDefault();
    
    //creating a variable that is a string, href is part of the a tag 
    path = ev.target.href;
    
    handleAjax(path);
    
}

//handling fetching data
function handleAjax(urlValue) {
    fetch(urlValue)
        .then(function(rsp) {
              return rsp.text();
        })
    
        .then(function (data){
              container.innerHTML = data;
        })
    
}

handleAjax(path);


navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);
