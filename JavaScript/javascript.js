// Elements
var viewportWidth;

var pos_home;
var pos_about;
var pos_portfolio;
var pos_contact;

var pos_top_about_header; 
var pos_bottom_about_header;

var nav_bg =  document.getElementById("nav_bg");
var nav_home = document.getElementById("nav-home");
var nav_about = document.getElementById("nav-about");
var nav_portfolio = document.getElementById("nav-portfolio");
var nav_contact = document.getElementById("nav-contact");
var active_nav_pre = nav_home;

var i = 0;

/*------------------------------------------------------------
  -                      ON LOAD / SCROLL                    -
  ------------------------------------------------------------ */
  
// WHEN PAGE IS LOADED / UPDATED
window.onload = function() {

    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var about_text = document.getElementById("about-text");

    if (viewportWidth < 764) { // Mobile
        changeNavColor("white");
    } 

    getSectionPosition(); //Get position of all main sections

    /* ----------------- NAV -------------------- */
    updateNav(); // Update look of nav

    // WHEN CLICK ON SECTION IN NAV
    document.getElementById("logo").addEventListener('click', function () {
        moveToSection(pos_home, nav_home);
    })
    nav_about.addEventListener('click', function () {
        moveToSection(pos_about, nav_about);
    })
    nav_portfolio.addEventListener('click', function () {
        moveToSection(pos_portfolio, nav_portfolio);
    })
    nav_contact.addEventListener('click', function () {
        moveToSection(pos_contact, nav_contact);
    })

    

    /* ----------------- CONTACT -------------------- */
    //WHEN CLICK ON SEND
    document.getElementById("submit-contact-form").addEventListener('click', function () {
        document.getElementById("contact-form").reset();
    })
};

// WHEN USER SCROLLS THE PAGE
window.onscroll = function() {
    updateNav(); // Update look of nav  
    if (viewportWidth > 764) { // Desktop      
        var pos = document.documentElement.scrollTop;
      
        if (pos >= pos_top_about_header && pos <= pos_bottom_about_header) {
            typeWriter(); // Active type writing effect on quote
        } else {
            document.getElementById("about-quote-text").innerHTML = "";
            i = 0;
        }
    }
};

//WHEN PAGE IS RESIZED
window.onresize = function() {
    viewportWidth = window.innerWidth || document.documentElement.clientWidth;
};
 
/*------------------------------------------------------------
  -                        MAIN                              -
  ------------------------------------------------------------ */
// GET TOP POSITION OF ALL MAIN SECTIONS
function getSectionPosition () {
    pos_body = document.body.getBoundingClientRect();
    pos_home = document.getElementById("home").getBoundingClientRect().top - (pos_body.top);
    pos_about = document.getElementById("about").getBoundingClientRect().top - (pos_body.top);
    pos_portfolio = document.getElementById("portfolio").getBoundingClientRect().top - (pos_body.top);
    pos_contact = document.getElementById("contact").getBoundingClientRect().top - (pos_body.top);

    pos_top_about_header = document.getElementById("aboutHeader").getBoundingClientRect().top - (pos_body.top);
    pos_bottom_about_header = pos_top_about_header + document.getElementById("aboutHeader").offsetHeight;
 
}

/*------------------------------------------------------------
  -                        NAV                               -
  ------------------------------------------------------------ */

// CHANGE HEIGHT AND POSITION OF LOGO
function animateLogo(pos) { 
    var logo = document.getElementById("logo");
    var nav_height = nav_bg.offsetHeight; // Height of nav background
    var min_height = Math.round(nav_height * 0.65); //65% of nav background height
    var logo_height = logo.offsetHeight; // Height of logo
    var logo_space; // Space for logo to fit in
    var nav_bg_space = Math.round(nav_height * 0.8); //Fit within nav background
    var screen_height = window.innerHeight; // Height of viewpoint
   
    if (pos >= pos_about) { // Below #About = no logo animation
        logo_height = min_height; // Set logo size to minimal size
        logo_space  = nav_bg_space; // Fit within nav_bg

    } else { // Within home = logo animation
        logo_space = screen_height - pos; // Height of space between top of viewpoint and bottom of #Home (since home = 100% och screen height)
        logo_height = (logo_space/10) * 8; // Set logo size to 80% of logo_space

        if (logo_height < min_height) { // Logo is to small
            logo_height = min_height; // Set logo size to minimal size
            logo_space  = nav_bg_space; // Fit within nav_bg
        } else if (logo_height == min_height) { // Logo is minimal size
            logo_space  = nav_bg_space; // Fit within nav_bg
        }
    }
    var pos_pos = (logo_space/2) - (logo_height/2) // Top position of logo 
    var left_pos = ((window.innerWidth * (logo_space / screen_height)) / 2) - (logo_height/2); //Left position of logo

    logo.style.top = pos_pos + 'px'; // Set top position
    logo.style.left = left_pos + 'px'; // Set left position
    logo.style.height = logo_height + 'px'; //Set height
}

// FADE NAV BACKGROUND IN OR OUT DEPENDING ON POSITION OF VIEWPOINT
function fadeNav(pos) {
    var nav_height = nav_bg.offsetHeight; //Height of nav background
    var fade_max = (pos_about - nav_height); // Start fading when top of viewpoint is [height of nav bg] above top position of About section
   
    if (pos >= fade_max) { // If top of viewpoint is below brekpoint for showing the nav background
        nav_bg.classList.remove("fadeOut"); // Remove animation for fading out
        nav_bg.classList.add("fadeIn"); // Add animation for fading in
        changeNavColor("white"); // Change color of text in nav to white
    } else {
        nav_bg.classList.remove("fadeIn"); // Remove animation for fading in
        nav_bg.classList.add("fadeOut"); // Add animation for fading out
        changeNavColor("pink"); // Change color of text in nav to pink
    }
}

// CHANGE HIGHLIGHT IN NAV
function activeNav(active_nav_new) {
    active_nav_pre.classList.toggle("active"); // Remove highligt from previous section
    active_nav_new.classList.toggle("active"); // Add highligHt to new section
    active_nav_pre = active_nav_new; // Store new section in memory as previous section
}

// CHANGE COLOR ON TEXT IN NAV
function changeNavColor (color){
    switch (color) {
        case "white":
            nav_about.style.color = "white";
            nav_portfolio.style.color = "white";
            nav_contact.style.color = "white";
            break;
        case "pink":  
            nav_about.style.color = "rgb(239, 218, 218)";
            nav_portfolio.style.color = "rgb(239, 218, 218)";
            nav_contact.style.color = "rgb(239, 218, 218)";
            break;
    }
}

// CHECK WHAT IS THE TOP POSITION OF VIEWPOINT AND CHANGE HIGHLIGT IN NAV ACCORDINGLY
function changeActiveNav(pos) {
     if (pos >= pos_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (pos >= pos_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (pos >= pos_about){ //Within about section
        activeNav(nav_about);
    } else { //Within home section
        activeNav(nav_home);
    }
}

// UPDATE LOOK OF NAV
function updateNav() {
    var pos = document.documentElement.scrollTop; //Find top position  
    if (viewportWidth > 764) { // Desktop
        fadeNav(pos); // Show or hide nav backgorund
        animateLogo(pos); // Change height and position of logo
    }
    changeActiveNav(pos); // Change what section in nav that is highlighted
}

// MOVE TO GIVEN SECTION ON CLICK IN NAV
function moveToSection (sectionTop, sectionNav) {
    window.scrollTo(0, (sectionTop + 10));
    activeNav(sectionNav);
}

/*------------------------------------------------------------
  -                        HOME                              -
  ------------------------------------------------------------ */

/*------------------------------------------------------------
  -                        ABOUT                             -
  ------------------------------------------------------------ */

function typeWriter() {
    console.log("typeWriter");
    var txt = "With vision and determination, nothing is impossible";
    var speed = 500;
  if (i < txt.length) {
    document.getElementById("about-quote-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
/*------------------------------------------------------------
  -                       CONTACT                            -
  ------------------------------------------------------------ */

  