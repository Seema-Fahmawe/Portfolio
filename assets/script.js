let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add('new-bg');
        navbar.style.transition = "0.5s";
    } else {
        navbar.classList.remove('new-bg');
    }
})

document.querySelector(".top").style.opacity='0';
window.addEventListener("scroll",function(){
    let aboutPos=document.getElementById("about").offsetTop;
    if(window.scrollY > aboutPos){
        document.querySelector(".top").style.opacity='1';
        document.querySelector(".top").style.transition='0.7s';
    }else{
        document.querySelector(".top").style.opacity='0';
        document.querySelector(".top").style.transition='0.7s';
    }
})

let topbtn=document.querySelector(".top button");
topbtn.addEventListener("click",function(){
    window.scroll({
        top:0,
        behaviour:"smooth",
    })
})

let body=document.getElementById("body");
body.style.overflow="hidden";
document.querySelector(".loading").style.visibility="visible";
window.addEventListener("load",function(){
    this.setTimeout(function(){
        document.querySelector(".loading").style.visibility="hidden";
        body.style.overflow="auto";
    },2000)
})