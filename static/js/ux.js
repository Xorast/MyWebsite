// Navbar clash
// "d-flex" used for having the item on the right side ;
// clashing with collapse (display block) on small screen (burger menu)
// if seen from small screen : remove the classes d-flex and justifiy-...
function Initialisation() {
      if ($(window).width() < 990) { 
          $('#navbarColor02').removeClass("d-flex justify-content-end");       
      }
      
  }

window.onload = Initialisation() ;

// Link without the CSS hassle
function goTo(url) {
      // open in the same tab
      // window.location.href = url;
      // open in a new tab
      var win = window.open(url, '_blank');
      win.focus();
}