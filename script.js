// script.js Heather Dinh

/*fade in text*/
$(document).ready(function() {
    $('#top_title').fadeTo(1500, 1);
    $('h1').delay(1500).fadeTo(1800, 1);
    $('nav').delay(2000).fadeTo(800, 0.7);
    $('#arrow').delay(2000).fadeTo(800, 1);
});


/*blinking animation*/
function blink_text() {
    $('.blink').fadeOut(750);
    $('.blink').fadeIn(750);
}

setInterval(blink_text, 1000);

/*nav bar dropdown*/
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
            }, 750, function() {
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

/*nav bar*/

/*change color of nav text when click on link*/
/*
$(document).ready(function() {
    $('nav li a').click(function() {
        $('nav li a').removeClass();
        $($(this)).addClass('active');
    });
});
*/

/*change active nav class as scrolling down*/    

$(document).ready(function() {
    var scroll_pos = 0;
    var about_pos = $("#about").position();
    var resume_pos = $("#resume").position();
    var projects_pos = $("#projects").position();
    var contact_pos = $("#contact").position();
    
    $(document).scroll(function() {
       scroll_pos = $(this).scrollTop();   
        
        if(scroll_pos >= 0 && scroll_pos < about_pos.top - 1) {
            $('nav li a').removeClass();
            $('#home_link').addClass('active');
        }else if(scroll_pos >= about_pos.top - 1 && scroll_pos < resume_pos.top - 1) {
            $('nav li a').removeClass();
            $('#about_link').addClass('active');
        }else if(scroll_pos >= resume_pos.top - 1 && scroll_pos < projects_pos.top - 1) {
            $('nav li a').removeClass();
            $('#resume_link').addClass('active');
        }else if($(this).scrollTop() + $(window).height() + 20 >= $(document).height()) {
            $('nav li a').removeClass();
            $('#contact_link').addClass('active');
        }else if(scroll_pos >= projects_pos.top - 1) {
            $('nav li a').removeClass();
            $('#projects_link').addClass('active');
        }
    });
    
    
});
