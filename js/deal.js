$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
	    nav: false,
	});

});

$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("#logo").removeClass("big-logo").addClass("small-logo");
		$("#header").css('background-color', '#fff');

	} else {
		$("#logo").removeClass("small-logo").addClass("big-logo");
		$("#header").css('background-color', '#fafafa');
	}
	
});