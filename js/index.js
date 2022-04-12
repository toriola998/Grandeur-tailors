const menuBtn = document.querySelector('#hamburger');
const links = document.querySelector('nav div');
const closeIcon = document.querySelector('#close-icon');

//TOGGLE HAMBURGER-MENU BTN
menuBtn.addEventListener('click', () => {
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
        menuBtn.setAttribute("aria-expanded", false)
    } else {
        links.classList.add('show-links');
        menuBtn.setAttribute("aria-expanded", true)
    }
})

//CLOSE NAV-BAR ONCE CLOSE BUTTON IS CLICKED
closeIcon.addEventListener('click', () => {
    links.classList.remove('show-links');
    menuBtn.setAttribute("aria-expanded", false)
});

let navLists = document.querySelectorAll('nav ul li');
//CLOSE THE NAV-BAR WHENEVER EACH NAV-LINK IS CLICKED
navLists.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
    menuBtn.setAttribute("aria-expanded", false) 
  }); 
});

//UPDATE COPYRIGHT YEAR AUTOMATICALLY
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

var myAnimation = new hoverEffect({
  parent: document.querySelector('.home-photo'),
  intensity: 0.3,
  image1: './assets/gallery-images/suits005.jpg',
  image2: './assets/gallery-images/suits001.jpg',
  displacementImage: './assets/gallery-images/suits004.jpg'
});