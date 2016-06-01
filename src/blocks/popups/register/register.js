$(".popupRegister__tab").click(function(){
	$(".popupRegister__tab").removeClass("active");
	$(this).addClass("active");
	var data = $(this).data("type");
	$(".popupRegister__item").removeClass("closed");
	$(".popupRegister__item[data-type="+data+"]").addClass("closed");
});
$(".overlay, .popupRegister__close, .popupLogin__close, .popupDeposit__close, .popupForgot__close").click(function(){
	$(".overlay").removeClass("open");
	$(".popupRegister, .popupLogin, .popupDeposit, .popupForgot").removeClass("open");
});
$(".popupRegister__submit").click(function(e){
	e.preventDefault();
	$(".popupRegister__form").toggleClass("closed");
});

function openRegistration(){
	$(".popupRegister").addClass("open");
	$(".overlay").addClass("open");
}
function openLogin(){
	$(".popupLogin").addClass("open");
	$(".overlay").addClass("open");
}
function openForgot(){
	$(".popupForgot").addClass("open");
	$(".overlay").addClass("open");
}
function openDeposit(){
	$(".popupDeposit").addClass("open");
	$(".overlay").addClass("open");
}
$(".entry__icon").click(function(){
	openForgot();
});
$(".entry__register, .screen__register").click(function(){
	openRegistration();
});
