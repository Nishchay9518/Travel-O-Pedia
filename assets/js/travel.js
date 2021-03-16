


const selectElement = function (element){
    return document.querySelector(element);
};

let menuToggler = selectElement('.menutoggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});


const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelectorAll('.nav-list')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('open')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('top')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 800) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)




// ScrollReveal

ScrollReveal().reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '30px',
    // delay: 300,
    reset: true,
 
});

ScrollReveal().reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '15rem',
    // delay: 600
    interval: 200,
    reset: true,
 
});

ScrollReveal().reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '30px',
    // delay: 600
    interval: 200,
    reset: true,
 
});

ScrollReveal().reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '30px',
    // delay: 600
    interval: 200,
    reset: true,
});

//Mouse Effect
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2")
document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;

    cursor.style.left=cursor2.style.left = x + "px";
    cursor.style.top =cursor2.style.top= y + "px";
});

//

$(".gallery").magnificPopup({
    delegate:'a',
    type:'image',
    gallery: {
        enabled:true
    }
});