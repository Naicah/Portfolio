var nav_about = document.getElementById("nav_about");
var nav_portfolio = document.getElementById("nav_portfolio");
var nav_contact = document.getElementById("nav_contact");
var home = document.getElementById("home");
var active_nav_pre = home;
var active_nav_new;


function activeNav(nav_new) {
    if (active_nav_pre != home) { //Don't toggle 'active' on home, only elements in nav
        active_nav_pre.classList.toggle("active");
    }
    active_nav_new.classList.toggle("active");
    active_nav_pre = nav_new;
}



document.getElementById('nav_about').addEventListener('click', function () {
    active_nav_new = nav_about;
    activeNav(nav_about);
})
document.getElementById('nav_portfolio').addEventListener('click', function () {
    active_nav_new = nav_portfolio;
    activeNav(nav_portfolio);
})
document.getElementById('nav_contact').addEventListener('click', function () {
    active_nav_new = nav_contact;
    activeNav(nav_contact);
})


/*
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/