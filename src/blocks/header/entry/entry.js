$(".entry__submit").click(function(event){
	event.preventDefault();
	$(".entry").addClass("entry--closed");
	$(".logged").removeClass("logged--closed");
	$(".nav__link--closed").removeClass("nav__link--closed");
});
