$(document).ready(function () {
	
	// Toggles Hamburger Icon
	  $('.menu-handle').on('click', function(){
	    $('nav ul').toggleClass('showing');

	});

	//Hides "x" button
	  $('.nav-close').on('click', function(){
	    $('nav ul').toggleClass('showing');

	});


//touch screen carousel
$(".carousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
    $(this).one("touchmove", function(event){
        var xMove = event.originalEvent.touches[0].pageX;
        if( Math.floor(xClick - xMove) > 3 ){
            $(".carousel").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -3 ){
            $(".carousel").carousel('prev');
        }
    });
    $(".carousel").on("touchend", function(){
            $(this).off("touchmove");
    });
});	  


});

//stop auto-slide for video carousel
$(document).ready(function() {      
   $('.carousel').carousel('pause');
});

//slider slideshow

$(document).ready(function (){
	$(".rslides").responsiveSlides();
})