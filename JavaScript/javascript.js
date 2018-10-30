var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var scrollTop_win;
var scrollTop_home = home.offsetTop;
var scrollTop_about = about.offsetTop;
var scrollTop_portfolio = portfolio.offsetTop;
var scrollTop_contact = contact.offsetTop;

var nav_home = document.getElementById("nav-home");
var nav_about = document.getElementById("nav-about");
var nav_portfolio = document.getElementById("nav-portfolio");
var nav_contact = document.getElementById("nav-contact");

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
document.getElementById('nav-about').addEventListener('click', function () {
    activeNav(nav_about);
})
document.getElementById('nav-portfolio').addEventListener('click', function () {
    activeNav(nav_portfolio);
})
document.getElementById('nav-contact').addEventListener('click', function () {
    activeNav(nav_contact);
})

//Check where top position is and change highlight in nav accordingly
function changeActivNavOnScroll() {
    if (scrollTop_win >= scrollTop_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (scrollTop_win >= scrollTop_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (scrollTop_win >= scrollTop_about) { //Within about section
        activeNav(nav_about);
    } else { //Within home section
        activeNav(nav_home);
        nav_home.classList.remove("active");
    }
}

// When the user scrolls the page
window.onscroll = function() {
    scrollTop_win = document.documentElement.scrollTop; //Find top position
    changeActivNavOnScroll(); // Change what section in nav that is highlighted
};

/*------------------------------------------------------------
  -                        HOME                              -
  ------------------------------------------------------------ */



function moveLogo() {
    var logo = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}