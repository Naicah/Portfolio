window.onload = function() {
    moveElementDiagonal_MiddleTop(logo, logo.offsetHeight);
};

var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var element_height;
var element_space;

var screen_height = document.getElementById("home").offsetHeight;
var screen_width = document.getElementById("home").offsetWidth;

var scrollTop_win_now;
var scrollTop_win_before;
var scrollTop_home = home.offsetTop;
var scrollTop_about = about.offsetTop;
var scrollTop_portfolio = portfolio.offsetTop;
var scrollTop_contact = contact.offsetTop;

var nav_bg =  document.getElementById("nav_bg");
var logo = document.getElementById("logo");
var nav_home = document.getElementById("nav-home");
var nav_about = document.getElementById("nav-about");
var nav_portfolio = document.getElementById("nav-portfolio");
var nav_contact = document.getElementById("nav-contact");

var active_nav_pre = nav_home;
var one_pro_height = screen_height/100;
var new_height;
var min_height = one_pro_height*10; //10% of screen height
var max_height = one_pro_height*81; //81% of screen height
    console.log("1%: " + one_pro_height);
    console.log("10%: " + min_height);
    console.log("80%: " + max_height);
    console.log("Screen height " + screen_height); 

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */

function changeHeight(element, element_height) {
    console.log("Element: " + element_height);
    if ((element_height > min_height) && (element_height < max_height)) {
        element_space = screen_height - scrollTop_win_now;
        console.log("Logo space: " + element_space);
        element_height = (element_space/10) * 8;
        if (element_height > min_height) {
            console.log("New element height: " + element_height);
            element.style.height = element_height + 'px';
            moveElementDiagonal_MiddleTop(logo, element_height);
        }
    }
   
}

function moveElementDiagonal_MiddleTop(element, element_height) {
    var procent = element_space / screen_height;
    var top_pos = (element_space/2) - (element_height/2)
    var left_pos = ((screen_width * procent) / 2) - (element_height/2);

    element.style.top = top_pos + 'px';
    element.style.left = left_pos + 'px';
}

// Change highlight in nav
function activeNav(active_nav_new) {
    if (active_nav_pre != nav_home) { //Don't toggle 'active' on home, only elements in nav
        active_nav_pre.classList.toggle("active");
    }
    active_nav_new.classList.toggle("active");
    active_nav_pre = active_nav_new;
}

//When click on section in nav
nav_about.addEventListener('click', function () {
    activeNav(nav_about);
})
nav_portfolio.addEventListener('click', function () {
    activeNav(nav_portfolio);
})
nav_contact.addEventListener('click', function () {
    activeNav(nav_contact);
})

//Check where top position is and change highlight in nav accordingly
function changeActivNavOnScroll() {
    if (scrollTop_win_now >= scrollTop_contact) { //Within contact section
        activeNav(nav_contact);
      //  nav_bg.classList.add("fade");
    } else if (scrollTop_win_now >= scrollTop_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
      //  nav_bg.classList.add("fade");
    }  else if (scrollTop_win_now >= scrollTop_about) { //Within about section
        activeNav(nav_about);
        nav_bg.classList.remove("fadeOut");
        nav_bg.classList.add("fadeIn");
    } else { //Within home section
        activeNav(nav_home);
        nav_bg.classList.remove("fadeIn");
        nav_bg.classList.add("fadeOut");
        nav_home.classList.remove("active");
    }
}

// When the user scrolls the page
window.onscroll = function() {
    scrollTop_win_before = scrollTop_win_now;
    scrollTop_win_now = document.documentElement.scrollTop; //Find top position
    changeActivNavOnScroll(); // Change what section in nav that is highlighted
    changeHeight(logo, logo.offsetHeight);
};



/*------------------------------------------------------------
  -                        HOME                              -
  ------------------------------------------------------------ */
