$(".accountDeposit__button").click(function(event){
	$(".accountDeposit__openRow").addClass("accountDeposit__openRow--closed");
	$(".accountDeposit__row").removeClass("accountDeposit__row--closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("accountDeposit__row--closed");
	var submenu = parent.next();
	submenu.removeClass("accountDeposit__openRow--closed");
	// parent.next().removeClass("accountDeposit__openRow--closed");
});
$(".accountDeposit__close").click(function(event){
	$(".accountDeposit__openRow").addClass("accountDeposit__openRow--closed");
	$(".accountDeposit__row").removeClass("accountDeposit__row--closed");
});
