var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var scrollTop_win;
var scrollTop_home = home.offsetTop;
var scrollTop_about = about.offsetTop;
var scrollTop_portfolio = portfolio.offsetTop;
var scrollTop_contact = contact.offsetTop;

var nav_home = document.getElementById("nav_home");
var nav_about = document.getElementById("nav_about");
var nav_portfolio = document.getElementById("nav_portfolio");
var nav_contact = document.getElementById("nav_contact");

var active_nav_pre = nav_home;

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */

  // Change highlight in nav
  function activeNav(active_nav_new) {
    if (active_nav_pre != nav_home) { //Don't toggle 'active' on home, only elements in nav
        active_nav_pre.classList.toggle("active");
    }
    active_nav_new.classList.toggle("active");
    active_nav_pre = active_nav_new;
}

//When click on section in nav
document.getElementById('nav_about').addEventListener('click', function () {
    activeNav(nav_about);
})
document.getElementById('nav_portfolio').addEventListener('click', function () {
    activeNav(nav_portfolio);
})
document.getElementById('nav_contact').addEventListener('click', function () {
    activeNav(nav_contact);
})

function changeActivNavOnScroll() {
    if (scrollTop_win >= scrollTop_contact) {
        activeNav(nav_contact);
    } else if (scrollTop_win >= scrollTop_portfolio) {
        activeNav(nav_portfolio);
    }  else if (scrollTop_win >= scrollTop_about) {
        activeNav(nav_about);
    } else {
        activeNav(nav_home);
        nav_home.classList.remove("active");
    }
}


// When the user scrolls the page
window.onscroll = function() {
    scrollTop_win = document.documentElement.scrollTop;
    changeActivNavOnScroll();
};



