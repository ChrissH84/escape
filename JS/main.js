/* Header - Section / Hamburger Menu */
const menuBtn = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});



/* Hero Section, Moving Background */ 
let sun = document.getElementById('sun');
let mountainsBack = document.getElementById('mountains-back');
let heroTitle = document.getElementById('hero-title');
let btn = document.getElementById('btn');
let mountainsFront = document.getElementById('mountains-front');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.top = value * 1 + 'px';
    mountainsBack.style.top = value * 0.50 + 'px';
    mountainsFront.style.top = value * 0.25 + 'px';
    heroTitle.style.marginTop = value * 3.5 + 'px';
    btn.style.marginTop = value * 3.5 + 'px';
})

/* About Section */
window.addEventListener('scroll', reveal);

function reveal(){ 
    var reveals = document.querySelectorAll('.reveal-one');
    
    for(var i = 0; i < reveals.length; i++){
        
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;
        var activePoint = windowHeight - revealPoint;
        if(revealTop < activePoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
