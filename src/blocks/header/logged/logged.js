$(".logged__logout").click(function(event){
	$(".logged").addClass("logged--closed");
	$(".nav__link:nth-child(3)").addClass("nav__link--closed");
	$(".entry").removeClass("entry--closed");
	$(".screen__deposit").toggleClass("closed");
	$(".screen__login").toggleClass("closed");
	$(".screen__register").toggleClass("closed");
});
