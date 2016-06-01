$(document).ready(function () {
	//= ../blocks/header/entry/entry.js
	//= ../blocks/header/logged/logged.js
	//= ../blocks/buttons/upButton/upButton.js
	//= ../blocks/promotions/panel/panel.js
	//= ../blocks/virtual-sports/panel/panel.js
	//= ../blocks/promotions/content/content.js
	//= ../blocks/banking/panel/panel.js
	//= ../blocks/banking/table/table.js
	//= ../blocks/games/panel/panel.js
	//= ../blocks/faq/content/content.js
	//= ../blocks/popups/register/register.js
	//= ../blocks/account/accountDeposit/accountDeposit.js
	//= ../blocks/account/accountWithdraw/accountWithdraw.js
	//= ../blocks/account/accountPayments/accountPayments.js
	//= ../blocks/account/accountHistory/accountHistory.js
	//= ../blocks/account/accountResponsible/accountResponsible.js
	//= ../blocks/account/panel/panel.js
	//= ../blocks/game/content/content.js
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true
	});

	$(".loginBox__form").on("submit", function (e) {
		e.preventDefault();
		$(".loginBox").addClass("closed");
		$(".header__infoLine").addClass("open");
		$(".profileInfo").addClass("open");
		$(".header__navItem.closed").removeClass("closed");
		$(".header__support").addClass("open");
	});

	$(".profileInfo__logOut").click(function (e) {
		e.preventDefault()
		$(".loginBox").removeClass("closed");
		$(".header__infoLine").removeClass("open");
		$(".profileInfo").removeClass("open");
		$(".header__navItem:nth-child(2)").addClass("closed");
		$(".header__support").removeClass("open");
	});

	$(".up").click(function(){
		window.scrollTo(0, 0);
	});

	$(".header__navItem[data-type='profile']").click(function(){
		console.log("I am here!");
		e.preventDefault();
		$(".loginBox").addClass("closed");
		$(".header__infoLine").addClass("open");
		$(".profileInfo").addClass("open");
		$(".header__navItem.closed").removeClass("closed");
		$(".header__support").addClass("open");
	});

});
