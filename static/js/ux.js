// Navbar clash
// "d-flex" used for having the item on the right side ;
// clashing with collapse (display block) on small screen (burger menu)
// if seen from small screen : remove the classes d-flex and justifiy-...
function Initialisation() {
      if ($(window).width() < 990) { 
          $('#navbarColor02').removeClass("d-flex justify-content-end");       
      }
}

// Link without the CSS hassle
function goTo(url) {
      // open in the same tab
      // window.location.href = url;
      // open in a new tab
      var win = window.open(url, '_blank');
      win.focus();
}

window.onload = Initialisation() ;


// ELEMENTS APPEAR ON SCROLLING
// Coming from codepen : https://codepen.io/anon/pen/zmyyBe

$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},5000);
                    
            }
            
        }); 
    
    });
    
});