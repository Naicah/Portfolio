var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

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

var logo_space;
var nav_home = document.getElementById("nav-home");
var nav_about = document.getElementById("nav-about");
var nav_portfolio = document.getElementById("nav-portfolio");
var nav_contact = document.getElementById("nav-contact");
var active_nav_pre = nav_home;



/*------------------------------------------------------------
  -                        ON LOAD                           -
  ------------------------------------------------------------ */

window.onload = function() {
    scrollTop_win_now = document.documentElement.scrollTop; //Find top position
    getSectionPosition();
    changeActivNavOnScroll(); // Change what section in nav that is highlighted
    changeHeightLogo();
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

//Change height of logo
function changeHeightLogo() { 

    var min_height = Math.round(nav_bg.offsetHeight * 0.65); //65% of nav_bg height
    var max_height = (screen_height/100)*81; //81% of screen height
    var logo_height = logo.offsetHeight;

    scrollTop_win_now = document.documentElement.scrollTop; //Find top position

    if (scrollTop_win_now >= top_about) { // Below #About = no logo animation
        logo_height = min_height; // Logo is minimal size
        logo_space  = Math.round(nav_bg.offsetHeight * 0.8); //Fit within nav_bg

    } else { // Within home = logo animation

        if (logo_height < min_height) { // Logo is to small
            logo_height = min_height; //Make minimal size
            logo_space  = Math.round(nav_bg.offsetHeight * 0.8);

        } else if (logo_height == min_height) { // Logo is minimal size
            logo_space  = Math.round(nav_bg.offsetHeight * 0.8);

        } else {
            logo_space = screen_height - scrollTop_win_now;
            logo_height = (logo_space/10) * 8;
        }

        var procent = logo_space / screen_height;
        var top_pos = (logo_space/2) - (logo_height/2)
        var left_pos = ((screen_width * procent) / 2) - (logo_height/2);

        logo.style.top = top_pos + 'px';
        logo.style.left = left_pos + 'px';

    }



    logo.style.height = logo_height + 'px';
    // moveLogo(logo_height, min_height);
    // console.log("Min height: " + min_height);
}

// Move logo diagonally
function moveLogo(logo_height, min_height) {
    

    if (scrollTop_win_now >= top_about) {
        logo_space  = Math.round(nav_bg.offsetHeight * 0.8);
    } else {
        logo_space = screen_height - scrollTop_win_now;
    }

    if (logo_height > min_height) {
        var procent = logo_space / screen_height;
        var top_pos = (logo_space/2) - (logo_height/2)
        var left_pos = ((screen_width * procent) / 2) - (logo_height/2);

        logo.style.top = top_pos + 'px';
        logo.style.left = left_pos + 'px';
    }
    

    // console.log("Top: "+ top_pos);
    // console.log("Left: "+ left_pos);
}


    // console.log("Logo height: " + logo_height);
    // console.log("min height: " + min_height);

    // if (logo_height < min_height) {
    //     console.log ("För liten");
    //     logo.style.height = min_height + 'px';
    //     console.log("ny min height: " + min_height+ 'px');
    // } 
    // if ((logo_height == min_height) && (scrollTop_win_now > scrollTop_win_before)) { //Scrolling down
    //     console.log ("Lika stor skroll ner");
    // } else if ((logo_height == min_height) && (scrollTop_win_now < scrollTop_win_before)){ // SCrolling up
       
    //     console.log ("Lika stor skroll upp");
    //      logo.style.height =( min_height + 1) + 'px';
        
    //      console.log("Logo height: " + (min_height + 1));
      
    // } 
    
    //  if ((logo_height > min_height) && (logo_height < max_height)) {
            
    //         console.log ("Ska ändra storlek");
    //         logo_space = screen_height - scrollTop_win_now;
    //         logo_height = (logo_space/10) * 8;
    //             logo.style.height = logo_height + 'px';
    //             moveLogo();
    //  }
    
//}



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
    changeHeightLogo(); // Change height of logo

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
