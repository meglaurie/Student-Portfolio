function openNav() {
    document.getElementById('navbtn').style.display = "none";
    document.getElementById("mySidenav").style.width = "100%";
    // document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

function closeNav() {
    document.getElementById('navbtn').style.display = "block";
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

//Back to top
$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
var amountScrolled = 300;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
}); 
