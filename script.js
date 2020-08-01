// script.js Heather Dinh

$(function() {
      menu = $('nav ul');

    //prevents whatever happened before and displays the nav bar with a sliding motion
      $('#toggle-btn').on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
      });

    // if window is expanded past mobile, displays static bar again
      $(window).resize(function() {
            var w = $(this).width();
            if(w > 580 && menu.is(':hidden')) {
                  menu.removeAttr('style');
            }
      });

    // closes the dropdown when a section is clicked on
      $('nav li').on('click', function(e) {
            var w = $(window).width();
            if(w < 580) {
                  menu.slideToggle();
            }
      });
    
      $('.open-menu').height($(window).height());
});

/*smooth scrolling from css-tricks.com*/

// select all href that have a # hash
$('a[href*="#"]')
  // remove nonlinking elements that have the # hash
  .not('[href="#"]')
  .not('[href="#0"]')
  
  // on-page links
  .click(function(event) {
    if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        // figure out which element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        
        //does this target exist
        if(target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                //callback after the animation to the target
                //change the focus to that part of the page
                var $target = $(target);
                $target.focus();
                //finally check if the target was focused
                if($target.is(":focus")) {
                    return false;
                }else {
                    $target.attr('tabindex', '-1');
                    $target.focus();
                };
            });
        }
    }
});

/*change color of nav text as scrolling down*/
/*
$(document).ready(function(){
    var scroll_pos = 0;
    var home_pos = $(".home-content").scrollTop();
    var about_pos = $(".about-content").scrollTop() + $(".section-hero").height();
    var resume_pos = $(".resume-content").scrollTop() + $(".about-content").height();
    var projects_pos = $(".projects-content").scrollTop() + $(".resume-content").height();
    var contact_pos = $(".contact-content").scrollTop() + $(".projects-content").height();
    
    $(document).scroll(function(){
       scroll_pos = $(this).scrollTop();
        if(scroll_pos > home_pos && scroll_pos < about_pos) {
            $("nav a.home_active").css('color', 'blue');
        }else {
            $("nav a.home_active").css('color', 'white');
        }
        
        if(scroll_pos > about_pos && scroll_pos < resume_pos) {
            $("nav a.about_active").css('color', 'blue');
        }else {
            $("nav a.about_active").css('color', 'white');
        }
        
        if(scroll_pos > resume_pos && scroll_pos < projects_pos) {
            $("nav a.resume_active").css('color', 'blue');
        }else {
            $("nav a.resume_active").css('color', 'white');
        }
        
        if(scroll_pos > projects_pos && scroll_pos < contact_pos) {
            $("nav a.projects_active").css('color', 'blue');
        }else {
            $("nav a.projects_active").css('color', 'white');
        }
        
        
        if(scroll_pos > contact_pos) {
            $("nav a.contact_active").css('color', 'blue');
        }else {
            $("nav a.contact_active").css('color', 'white');
        }
        
        
    });
    
    
});
*/
