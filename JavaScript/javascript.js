var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var element_space;
var screen_height = window.innerHeight;
var screen_width = window.innerWidth;

var scrollTop_win_now; //Top position rigth now
var scrollTop_win_before; // Previos top position (when scrolling)

var pos_body;
var pos_home;
var top_home;
var pos_about;
var top_about;
var pos_portfolio;
var top_portfolio;
var pos_contact;
var top_contact;

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

/*------------------------------------------------------------
  -                        ON LOAD                           -
  ------------------------------------------------------------ */

window.onload = function() {
    scrollTop_win_now = document.documentElement.scrollTop; //Find top position
    getSectionPosition();
    changeActivNavOnScroll(); // Change what section in nav that is highlighted
    changeHeight(logo, logo.offsetHeight);
};

/*------------------------------------------------------------
  -                        MAIN                              -
  ------------------------------------------------------------ */
function getSectionPosition () {
    pos_body = document.body.getBoundingClientRect();
    pos_home = home.getBoundingClientRect();
    top_home = pos_home.top - (pos_body.top);
    pos_about = about.getBoundingClientRect();
    top_about = pos_about.top - (pos_body.top);
    pos_portfolio = portfolio.getBoundingClientRect();
    top_portfolio = pos_portfolio.top - (pos_body.top);
    pos_contact = contact.getBoundingClientRect();
    top_contact = pos_contact.top - (pos_body.top);
}

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */

  //Change height of given element
function changeHeight(element, element_height) { 
    if ((element_height > min_height) && (element_height < max_height)) {
        element_space = screen_height - scrollTop_win_now;
        element_height = (element_space/10) * 8;
        if (element_height > min_height) {
            element.style.height = element_height + 'px';
            moveElementDiagonal_MiddleTop(logo, element_height);
        }
    }
}

// Move logo diagonally
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

//Check where top position is and change highlight in nav accordingly
function changeActivNavOnScroll() {
     if (scrollTop_win_now >= top_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (scrollTop_win_now >= top_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (scrollTop_win_now >= top_about){ //Within about section
        activeNav(nav_about);
        nav_bg.classList.remove("fadeOut");
        nav_bg.classList.add("fadeIn");
        nav_about.style.color = "white";
        nav_portfolio.style.color = "white";
        nav_contact.style.color = "white";
    } else { //Within home section
        activeNav(nav_home);
        nav_bg.classList.remove("fadeIn");
        nav_bg.classList.add("fadeOut");
        nav_home.classList.remove("active");
        nav_about.style.color = "rgb(239, 218, 218)";
        nav_portfolio.style.color = "rgb(239, 218, 218)";
        nav_contact.style.color = "rgb(239, 218, 218)";
    }
}

// When the user scrolls the page
window.onscroll = function() {
    getSectionPosition();
    scrollTop_win_before = scrollTop_win_now;
    scrollTop_win_now = document.documentElement.scrollTop; //Find top position
    changeActivNavOnScroll(); // Change what section in nav that is highlighted
    changeHeight(logo, logo.offsetHeight); // Change height of logo
};

//When click on section in nav
logo.addEventListener('click', function () {
    getSectionPosition();
    window.scrollTo(0, (top_home + 10));
    activeNav(nav_home);
})
nav_about.addEventListener('click', function () {
    getSectionPosition();
    window.scrollTo(0, (top_about + 10));
    activeNav(nav_about);
})
nav_portfolio.addEventListener('click', function () {
    getSectionPosition();
    window.scrollTo(0, (top_portfolio + 10));
    activeNav(nav_portfolio);
})
nav_contact.addEventListener('click', function () {
    getSectionPosition();
    window.scrollTo(0, (top_contact + 10));
    activeNav(nav_contact);
})


/*------------------------------------------------------------
  -                        HOME                              -
  ------------------------------------------------------------ */
