// Animated Hamburger Menu
// $(document).ready(function(){
// 	$('#nav-icon2').click(function(){
// 		console.log('navi.click');
// 		$(this).toggleClass('open');
// 	});
// });

// $(document).ready(function(){
// 	$('#mobileMenu').click(function(){
// 		console.log('menu.click');
// 		$(this).toggleClass('open');
// 	});
// });

// Mobile Menu
var toggle =false;

//$(document).ready(function(){menubtn = $('#nav-icon2');});

function toggleNav(foo){
		var menubtn = $('#nav-icon2');
		console.log("toggleNav." + foo );
		toggle = !toggle;

		if(toggle === true){
    document.getElementById("mobileMenu").style.width = "100%";
		document.getElementById("mobileMenu").style.height = "100%";
		document.getElementById('mobileMenu').style.display = "block";
		document.getElementById('mobileMenu').style.position = 'fixed';
		document.getElementById('nav-icon2').style.position = 'fixed';
		document.getElementById('logo-box').style.position = 'fixed';
		document.getElementById('mobileMenu').style.transition = '1.0s';
		//document.getElementById('Top').style.position = 'static';
		$('#nav-icon2').toggleClass('open');

		}
	else{
    document.getElementById("mobileMenu").style.width = "0%";
		document.getElementById("mobileMenu").style.height = "0%";
		document.getElementById('mobileMenu').style.position = 'static';
		document.getElementById('nav-icon2').style.position = 'static';
		document.getElementById('mobileMenu').style.display = "none";
		document.getElementById('logo-box').style.position = 'static';
		//document.getElementById('Top').style.position = 'fixed';
		// document.getElementById("nav-icon2").style.;
		$('#nav-icon2').toggleClass('open');
	}
}



// function choice(){
//
// 	var menuClick = document.getElementsByClassName('mobile-menu');
//
// 	if(menuClick.clicked === true){
// 		menuClick.style.display = "none";
// 	}
// }

// Project Drop down menu
// Toggle dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// SCROLL UP Buttom

	$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');
	var amountScrolled = 300;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.back-to-top').fadeIn('slow');
		} else {
			$('a.back-to-top').fadeOut('slow');
		}
	});

// Modal Privacy Policy Pop up
