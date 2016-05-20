$(".accountResponsible__button").click(function(event){
	$(".accountResponsible__openRow").addClass("accountResponsible__openRow--closed");
	$(".accountResponsible__row").removeClass("accountResponsible__row--closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("accountResponsible__row--closed");
	var submenu = parent.next();
	submenu.removeClass("accountResponsible__openRow--closed");
	// parent.next().removeClass("accountResponsible__openRow--closed");
});
$(".accountResponsible__close").click(function(event){
	$(".accountResponsible__openRow").addClass("accountResponsible__openRow--closed");
	$(".accountResponsible__row").removeClass("accountResponsible__row--closed");
});
$(".accountResponsible__exclusionButton").click(function(){
	$(".accountResponsible__exclusionButton").addClass("clicked");
	$(".accountResponsible__limitButton").removeClass("clicked");
	$(".accountResponsible__exclusion").removeClass("closed");
	$(".accountResponsible__header").addClass("closed");
	$(".accountResponsible__table tbody").addClass("closed");
});
$(".accountResponsible__limitButton").click(function(){
	$(".accountResponsible__limitButton").addClass("clicked");
	$(".accountResponsible__exclusionButton").removeClass("clicked");
	$(".accountResponsible__exclusion").addClass("closed");
	$(".accountResponsible__header").removeClass("closed");
	$(".accountResponsible__table tbody").removeClass("closed");
});
