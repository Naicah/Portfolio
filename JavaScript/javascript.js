var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var offset_home = home.offsetTop;
var offset_about = about.offsetTop;
var offset_portfolio = portfolio.offsetTop;
var offset_contact = contact.offsetTop;

var nav_about = document.getElementById("nav_about");
var nav_portfolio = document.getElementById("nav_portfolio");
var nav_contact = document.getElementById("nav_contact");



var active_nav_pre = home;
var active_nav_

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */
function activeNav(nav_new) {
    if (active_nav_pre != home) { //Don't toggle 'active' on home, only elements in nav
        active_nav_pre.classList.toggle("active");
    }
    active_nav_new.classList.toggle("active");
    active_nav_pre = nav_new;
}

//Klick på sektioner i nav
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


function changeActivNavOnScroll() {
    if (window.pageYOffset >= offset_home) {
       console.log("Toppen av home");
       console.log(offset_home)
    } else if (window.pageYOffset = offset_about) {
        console.log("Toppen av about");
        console.log(offset_about)
        active_nav_new = nav_about;
        activeNav(nav_about);
    } else if (window.pageYOffset = offset_portfolio) {
        console.log("Toppen av portfolio");
        console.log(offset_portfolio)
        active_nav_new = nav_portfolio;
        activeNav(nav_portfolio);
    }  else if (window.pageYOffset = offset_contact) {
        console.log(offset_contact)
        console.log("Toppen av contact");
        active_nav_new = nav_contact;
        activeNav(nav_contact);
    }
}


// When the user scrolls the page
window.onscroll = function() {
    console.log("Scrolling: " + window.pageYOffset)
    changeActivNavOnScroll()

};




/*


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