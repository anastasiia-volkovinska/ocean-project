$(".accountPayments__button").click(function(event){
	$(".accountPayments__openRow").addClass("accountPayments__openRow--closed");
	$(".accountPayments__row").removeClass("accountPayments__row--closed");
	var button = $(event.target);
	var parent = button.parent().parent();
	parent.addClass("accountPayments__row--closed");
	var submenu = parent.next();
	submenu.removeClass("accountPayments__openRow--closed");
	// parent.next().removeClass("accountPayments__openRow--closed");
});
$(".accountPayments__close").click(function(event){
	$(".accountPayments__openRow").addClass("accountPayments__openRow--closed");
	$(".accountPayments__row").removeClass("accountPayments__row--closed");
});

$('.input_file input[type=file]').change(function() {
		var t = $(this).val();
		if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
		var e = $(this).next().find('.fake_file_input');
		e.val(t);
});
$('.clear_input').click(function() {
		var a = $(this).parent();
		var e = a.find('.fake_file_input');
		var t = a.find('input[type=file]');
		t.replaceWith('<input type="file" name="" >');
		e.val('');
});
