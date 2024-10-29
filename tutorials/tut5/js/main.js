console.log("HELLO WORLd");

let pageTitle = document.querySelector("#page-title");

setTimeout(function(){
    pageTitle.style.color="red";
}, 3000)

let body = document.querySelector("body")
document.querySelector("header").onclick = function() {
    body.style.backgroundColor = "black";
}

document.querySelector("#image-0").addEventListener("click",function(){
    document.querySelector("#image-0").style.visibility= "hidden";

})
