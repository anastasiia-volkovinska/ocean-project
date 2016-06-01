$(".entry__submit, .screen__login").click(function(event){
	event.preventDefault();
	$(".entry").addClass("entry--closed");
	$(".logged").removeClass("logged--closed");
	$(".nav__link--closed").removeClass("nav__link--closed");
	$(".screen__deposit").toggleClass("closed");
	$(".screen__login").toggleClass("closed");
	$(".screen__register").toggleClass("closed");
});
