$(".accountHistory__button").click(function(event){
	$(".accountHistory__openRow").addClass("accountHistory__openRow--closed");
	$(".accountHistory__row").removeClass("accountHistory__row--closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("accountHistory__row--closed");
	var submenu = parent.next();
	submenu.removeClass("accountHistory__openRow--closed");
	// parent.next().removeClass("accountHistory__openRow--closed");
});
$(".accountHistory__close").click(function(event){
	$(".accountHistory__openRow").addClass("accountHistory__openRow--closed");
	$(".accountHistory__row").removeClass("accountHistory__row--closed");
});
