let navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add('new-bg');
        navbar.style.transition = "0.5s";
    } else {
        navbar.classList.remove('new-bg');
    }
})



document.querySelector(".top").style.opacity = '0';
window.addEventListener("scroll", function () {
    let aboutPos = document.getElementById("about").offsetTop;
    if (window.scrollY > aboutPos) {
        document.querySelector(".top").style.opacity = '1';
        document.querySelector(".top").style.transition = '0.7s';
    } else {
        document.querySelector(".top").style.opacity = '0';
        document.querySelector(".top").style.transition = '0.7s';
    }
})

let topbtn = document.querySelector(".top button");
topbtn.addEventListener("click", function () {
    window.scroll({
        top: 0,
        behaviour: "smooth",
    })
})

let body = document.getElementById("body");
body.style.overflow = "hidden";
document.querySelector(".loading").style.visibility = "visible";
window.addEventListener("load", function () {
    this.setTimeout(function () {
        document.querySelector(".loading").style.visibility = "hidden";
        body.style.overflow = "auto";
    }, 2000)
})


$('.theme i').click(function () {
    let w = $('.options').outerWidth()
    let lft = $('.theme').offset().left
    if (lft == 0) {
        $('.theme').animate({ left: -w }, 2000)
    } else {
        $('.theme').animate({ left: 0 }, 2000)
    }
})

let colors = ["#6C9BCF", "#FF6969", "#E5BEEC", "#BA90C6", "#ff724c"]
for (let i = 0; i < colors.length; i++) {
    $('.options li').eq(i).css("backgroundColor", colors[i])
}

$('.options li').click(function () {
    let bg = $(this).css("backgroundColor")
    $('body').attr('style', `--mainColor:${bg}`)
})