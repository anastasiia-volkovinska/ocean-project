$(".upButton").click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
});
$(window).on("scroll", function(event){
	console.log("I am scrolled!");
	if (window.pageYOffset > 100) {
		$(".upButton").addClass("visible");
	} else {
		$(".upButton").removeClass("visible");
	}
});
