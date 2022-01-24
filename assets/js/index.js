
// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// HEADER

/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove("show-menu")
    })
}


/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/* SCROLL SECTIONS ACTIVE LINK */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 300;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

  



// CAROUSEL WORDS IN HOME PAGE
const wr = document.querySelector(".word-rotate");

const words = wr.children;

let x = 0;
rotate(x);

setInterval(() => {
  x = ++x % words.length;
  rotate(x);
}, 1500);

function rotate(start) {
  for (let i = 0; i < words.length; ++i) {
    const j = (start + i) % words.length;
    let percent = j / words.length;
    let rad = percent * 2 * Math.PI;
    let ty = Math.sin(rad) * 200;
    let tz = 40 * Math.cos(rad) - 40;
    let op = (Math.cos(rad) + 1) / 2;
    words[
      i
    ].style.transform = `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`;
    words[i].style.opacity = `${op}`;
  }
}


// JQUERY (ADD AND QUIT CLASS) FOR ANIMATION ANIMATE.STYLE IN SUBTITLES SECTIONS


$(".section__subtitle").hover(   
    function () {
        var $this = $(this);
        $this.addClass("animate__animated     animate__rubberBand");
        
    },
    function () {
        var $this = $(this);
        setTimeout(function() {
            $this.removeClass("animate__animated     animate__rubberBand");
        }, 650);
    }
);




// MODAL ABOUT ME

var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}


$(".modal").on("show", function () {
    $("body").addClass("modal-open");
  }).on("hidden", function () {
    $("body").removeClass("modal-open")
});





/* MODAL - SKILL EFFECT */

const skillsContent =document.getElementsByClassName("skills__content")
const skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
    let itemClass =this.parentNode.className;

    for(i=0;i<skillsContent.length;i++){
        skillsContent[i].className="skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className= "skills__content skills__open"
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener("click",toggleSkills)
})