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
var pre_pos = 0;


/*------------------------------------------------------------
  -                      ON LOAD / SCROLL                    -
  ------------------------------------------------------------ */
  

  // When page is loaded/updated
window.onload = function() {
    var pos = document.documentElement.scrollTop; //Find top position
    getSectionPosition(); //Get position of all main sections
    if (pre_pos != 0) {
        fadeNav(pos, getScrollDirection(pos));
    }
    changeActiveNav(pos); // Change what section in nav that is highlighted
    animateLogo(pos);
};

// When the user scrolls the page
window.onscroll = function() {
    pos = document.documentElement.scrollTop; //Find top position
    changeActiveNav(pos); // Change what section in nav that is highlighted
    fadeNav(pos, getScrollDirection(pos));
    
    animateLogo(pos); // Change height and position of logo
};

/*------------------------------------------------------------
  -                        MAIN                              -
  ------------------------------------------------------------ */
function getSectionPosition () {
    pos_body = document.body.getBoundingClientRect();
    top_home = document.getElementById("home").getBoundingClientRect().top - (pos_body.top);
    top_about = document.getElementById("about").getBoundingClientRect().top - (pos_body.top);
    top_portfolio = document.getElementById("portfolio").getBoundingClientRect().top - (pos_body.top);
    top_contact = document.getElementById("contact").getBoundingClientRect().top - (pos_body.top);
}

function getScrollDirection (pos) {
    pos = Math.round(pos);
    pre_pos = Math.round(pre_pos);

    console.log("pre_pos: " + pre_pos);
    console.log("pos: " + pos);
    if (pos > pre_pos) {
        direction = "down";
        console.log("down");
    } else if (pos < pre_pos){
        direction = "up";
        console.log("up");
    } else {
        direction = "";
    }
    pre_pos = pos;
    return direction;
}

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */

//Change height and position of logo
function animateLogo(pos) { 

    var nav_height = nav_bg.offsetHeight;
    var min_height = Math.round(nav_height * 0.65); //65% of nav_bg height
    var logo_height = logo.offsetHeight;
    var logo_space;
    var nav_bg_space = Math.round(nav_height * 0.8); //Fit within nav_bg
    var screen_height = window.innerHeight;
    var screen_width = window.innerWidth;
   

    if (pos >= top_about) { // Below #About = no logo animation
        logo_height = min_height; // Logo is minimal size
        logo_space  = nav_bg_space; //Fit within nav_bg

    } else { // Within home = logo animation
        logo_space = screen_height - pos; // Height of space between top of viewpoint and bottom of #Home (since home = 100% och screen height)
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

function fadeNav(pos, direction) {
    
    var nav_height = Math.round(nav_bg.offsetHeight);
    var fade_max = Math.round((top_about - nav_height));
    var fade_min = fade_max - (nav_height/2);
    pos = Math.round(pos);
    // console.log("Pos: " + Math.round(pos));
    console.log("Fade min at: " + fade_min);
    console.log("Fade max at: " + fade_max);
    // if ((pos >= fade_min) && (pos <= fade_max)) {
    if (pos >= fade_max) {
        nav_bg.classList.remove("fadeOut");
        nav_bg.classList.add("fadeIn");

    } else {
        nav_bg.classList.remove("fadeIn");
        nav_bg.classList.add("fadeOut");
    }
        // console.log("Time to fade");
        // if (direction == "down") {
            
        // } else if (direction == "up") {
           
        // }
    // }
    changeNavColor(pos);
}

// Change highlight in nav
function activeNav(active_nav_new) {
    active_nav_pre.classList.toggle("active");
    active_nav_new.classList.toggle("active");
    active_nav_pre = active_nav_new;
}

// Change color on text in nav depending on if nav_bg is visible or not
function changeNavColor (pos){
    var nav_height = Math.round(nav_bg.offsetHeight);

    if (pos >= Math.round((top_about - nav_height))){ 
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
function changeActiveNav(pos) {
     if (pos >= top_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (pos >= top_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (pos >= top_about){ //Within about section
        activeNav(nav_about);
    } else { //Within home section
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
