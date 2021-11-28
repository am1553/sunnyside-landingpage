const navBtn = document.getElementById("nav-button");
const navPanel = document.getElementById("nav-panel");
const navLinks = document.querySelectorAll(".nav-links");
navBtn.addEventListener("click", openClosePanel);

function openClosePanel() {

    if(navPanel.classList.contains("nav-panel-close")) {
        navPanel.classList.remove("nav-panel-close");
        navPanel.classList.add('nav-panel-open');
    } else {
        navPanel.classList.remove('nav-panel-open');
        navPanel.classList.add("nav-panel-close");
    }
}

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", leaveNav);
}
function leaveNav() {
    navPanel.classList.remove('nav-panel-open');
    navPanel.classList.add("nav-panel-close");
}

gsap.registerPlugin(ScrollTrigger);

gsap.from('header', {duration: 0.5, opacity: 0.5})
gsap.from('body', {duration: 2, opacity: 0})
gsap.from('.arrow-img', {duration: 2.5, y: '-100%', ease: 'bounce'})
gsap.from('h1', {duration: 1.5, y: '-100vh', delay: 0.5, ease: 'back'})