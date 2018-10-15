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

