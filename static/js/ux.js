// UX.js

// RESPONSIVENESS
function Initialisation() {
      if ($(window).width() < 990) { 
          $('#navbarColor02').removeClass("d-flex justify-content-end");     // Navbar clash between collapse & d-flex  
          $('.project-description').removeClass("project-description");      // Make div apperearing under the project img (no hover)
      }
}
window.onload = Initialisation() ;

// MENU APPEARANCE
$(function(){  // $(document).ready shorthand
    $('#hideme-landing-1').animate({'opacity':'1'},2000);
    setTimeout(function(){
          $('#hideme-landing-2').animate({'opacity':'1'},2000);
    },2000);
    setTimeout(function(){
          $('#hideme-landing-3').animate({'opacity':'1'},2000);
    },4000);
    setTimeout(function(){
          $('#hideme-landing-4').animate({'opacity':'1'},2000);
    },6000);
});

// ELEMENTS APPEAR ON SCROLLING
// Coming from codepen : https://codepen.io/anon/pen/zmyyBe
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},3000);
                    
            }
            
        }); 
    
    });
    
});


// LINK (without the CSS hassle...)
function goTo(url) {
      // open in the same tab
      // window.location.href = url;
      // open in a new tab
      var win = window.open(url, '_blank');
      win.focus();
}