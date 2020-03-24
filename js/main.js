$(function () {
	$(window).scroll(function() {
	    $('h2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.secion_blocks').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+550) {
	            $(this).addClass("fadeIn");
	        }
	    });
    });
    $(window).scroll(function() {
	    $('.ticket_form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+550) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
})

