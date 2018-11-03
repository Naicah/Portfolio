window.onload = function() {
    scrollTop_win_now = 0;
};

var home = document.getElementById("home");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

var logo = document.getElementById("logo");
var element_height;

var screen_height = document.getElementById("home").offsetHeight;

var logo_space;

var scrollTop_win_now;
var scrollTop_win_before;
var scrollTop_home = home.offsetTop;
var scrollTop_about = about.offsetTop;
var scrollTop_portfolio = portfolio.offsetTop;
var scrollTop_contact = contact.offsetTop;

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

/*function changeHeight(element, element_height) {
    
    console.log("Element: " + element_height);
    //console.log("scroll before: " + scrollTop_win_before);
    //console.log("Scroll now: " + scrollTop_win_now);


    if ((element_height > min_height) && (element_height < max_height)) {
       if ((scrollTop_win_now > scrollTop_win_before)){ //Scrolling down
            console.log("Ska krympa");
            new_height = element_height-10;
            element.style.height = new_height + 'px';
            element_height = element_height-10;
        } else { //Scrolling up
            console.log("Ska växa");
            new_height = element_height+10;
            element.style.height =  new_height + 'px';
            element_height = element_height+10;
        }
    } else if (element_height > max_height) {
        element_height = max_height;
    } else if (element_height < min_height) {
        element_height = min_height;
    }
}*/

function changeHeight(element, element_height) {
    console.log("Element: " + element_height);
    if ((element_height > min_height) && (element_height < max_height)) {
        logo_space = screen_height - scrollTop_win_now;
        console.log("Logo space: " + logo_space);
        element_height = (logo_space/10) * 8;
        if (element_height > min_height) {

            console.log("New element height: " + element_height);
            element.style.height = element_height + 'px';
        }
    }
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
    if (scrollTop_win_now >= scrollTop_contact) { //Within contact section
        activeNav(nav_contact);
    } else if (scrollTop_win_now >= scrollTop_portfolio) { //Within portfolio section
        activeNav(nav_portfolio);
    }  else if (scrollTop_win_now >= scrollTop_about) { //Within about section
        activeNav(nav_about);
    } else { //Within home section
        activeNav(nav_home);
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

/*
window.onscroll = function() {
    if ($(document).scrollTop() >= 75) {
      $('#logoImage img').css('width', '200px');
    } else {
      $('#logoImage img').css('width', '');
    }
  }
*/


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