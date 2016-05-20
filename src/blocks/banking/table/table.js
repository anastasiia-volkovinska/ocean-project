$(".bankingDeposit__button").click(function(event){
	$(".bankingDeposit__openRow").addClass("closed");
	$(".bankingDeposit__row").removeClass("closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("closed");
	var submenu = parent.next();
	submenu.removeClass("closed");
});
$(".bankingDeposit__close").click(function(event){
	$(".bankingDeposit__openRow").addClass("closed");
	$(".bankingDeposit__row").removeClass("closed");
});

$(".bankingWithdraw__button").click(function(event){
	$(".bankingWithdraw__openRow").addClass("closed");
	$(".bankingWithdraw__row").removeClass("closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("closed");
	var submenu = parent.next();
	submenu.removeClass("closed");
});
$(".bankingWithdraw__close").click(function(event){
	$(".bankingWithdraw__openRow").addClass("closed");
	$(".bankingWithdraw__row").removeClass("closed");
});
