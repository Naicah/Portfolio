var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var screen_height = window.innerHeight;
var screen_width = window.innerWidth;

var scrollTop_win_pos; //Top position rigth now
// var scrollTop_win_before; // Previos top position (when scrolling)

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



/*------------------------------------------------------------
  -                      ON LOAD / SCROLL                    -
  ------------------------------------------------------------ */
// When page is loaded/updated
window.onload = function() {
    scrollTop_win_pos = document.documentElement.scrollTop; //Find top position
    getSectionPosition();
    nav_bg.classList.toggle("opacity0");
    nav_bg.classList.toggle("opacity1");
    changeActiveNav(); // Change what section in nav that is highlighted
    animateLogo(scrollTop_win_pos);
};

// When the user scrolls the page
window.onscroll = function() {
    getSectionPosition();
    scrollTop_win_pos = document.documentElement.scrollTop; //Find top position
    changeActiveNav(); // Change what section in nav that is highlighted
    changeNavColor(scrollTop_win_pos);
    animateLogo(scrollTop_win_pos); // Change height and position of logo
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

//Change height and position of logo
function animateLogo(scrollTop_win_pos) { 

    var min_height = Math.round(nav_bg.offsetHeight * 0.65); //65% of nav_bg height
    var logo_height = logo.offsetHeight;
    var logo_space;
    var nav_bg_space = Math.round(nav_bg.offsetHeight * 0.8); //Fit within nav_bg

    if (scrollTop_win_pos >= top_about) { // Below #About = no logo animation
        logo_height = min_height; // Logo is minimal size
        logo_space  = nav_bg_space; //Fit within nav_bg

    } else { // Within home = logo animation
        logo_space = screen_height - scrollTop_win_pos; // Height of space between top of viewpoint and bottom of #Home (since home = 100% och screen height)
        logo_height = (logo_space/10) * 8; // 80% of logo_space

        if (logo_height < min_height) { // Logo is to small
            logo_height = min_height; //Make minimal size
            logo_space  = nav_bg_space; //Fit within nav_bg
        } else if (logo_height == min_height) { // Logo is minimal size
            logo_space  = nav_bg_space; //Fit within nav_bg
        }
    }
    var top_pos = (logo_space/2) - (logo_height/2) // Top position of logo 
    var left_pos = ((screen_width * (logo_space / screen_height)) / 2) - (logo_height/2); //Left position of logo

    logo.style.top = top_pos + 'px'; // Set top position
    logo.style.left = left_pos + 'px'; // Set left position
    logo.style.height = logo_height + 'px'; //Set height
}

// Change highlight in nav
function activeNav(active_nav_new) {
    active_nav_pre.classList.toggle("active");
    active_nav_new.classList.toggle("active");
    active_nav_pre = active_nav_new;
}

// Change color on text in nav depending on if nav_bg is visible or not
function changeNavColor (pos){
    if (pos >= top_about){ 
        nav_about.style.color = "white";
        nav_portfolio.style.color = "white";
        nav_contact.style.color = "white";
    } else {
        nav_about.style.color = "rgb(239, 218, 218)";
        nav_portfolio.style.color = "rgb(239, 218, 218)";
        nav_contact.style.color = "rgb(239, 218, 218)";
    }
}

//Check where top position is and change highlight in nav accordingly
function changeActiveNav() {
     if (scrollTop_win_pos >= top_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (scrollTop_win_pos >= top_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (scrollTop_win_pos >= top_about){ //Within about section
        nav_bg.classList.remove("fadeOut");
        nav_bg.classList.add("fadeIn");
        activeNav(nav_about);
    } else { //Within home section
        nav_bg.classList.remove("fadeIn");
        nav_bg.classList.add("fadeOut");
        activeNav(nav_home);
    }
}

// Move to given section when clicking in nav
function moveToSection (sectionTop, sectionNav) {
    getSectionPosition();
    window.scrollTo(0, (sectionTop + 10));
    activeNav(sectionNav);
}

//When click on section in nav
logo.addEventListener('click', function () {
    moveToSection(top_home, nav_home);
})
nav_about.addEventListener('click', function () {
    moveToSection(top_about, nav_about);
})
nav_portfolio.addEventListener('click', function () {
    moveToSection(top_portfolio, nav_portfolio);
})
nav_contact.addEventListener('click', function () {
    moveToSection(top_contact, nav_contact);
})


/*------------------------------------------------------------
  -                        HOME                              -
  ------------------------------------------------------------ */
