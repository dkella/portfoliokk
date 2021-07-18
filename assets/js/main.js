// menu show y hidden
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// show    
toggleMenu.addEventListener('click',()=>{
    navMenu.classList.toggle('show')
})

// hide    
closeMenu.addEventListener('click',()=>{
    navMenu.classList.remove('show')
})

// remove menu
const navLink =document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))

//scroll section active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId =current.getAttribute('id')

        if(scrollY >sectionTop && scrollY <=sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active')
        }
        else{
            document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active')
        }
    })
}

// title animation
var tx = new Array ("Kella | Portfolio");

var txcount=1;

var i=1;
var wo=0;
var ud=1;
function animatetitle()
{
    window.document.title=tx[wo].substr(0, i)+"|";
    if (ud==0) i--;
    if (ud==1) i++;
    if (i==-1) {ud=1;i=0;wo++;wo=wo%txcount;}
    if (i==tx[wo].length+10) {ud=0;i=tx[wo].length;}

    parent.window.document.title=tx[wo].substr(0, i)+"|";
    setTimeout("animatetitle()",200);
}

animatetitle();
