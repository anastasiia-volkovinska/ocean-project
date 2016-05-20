"use strict";

$(document).ready(function () {
	$(".entry__submit").click(function (event) {
		event.preventDefault();
		$(".entry").addClass("entry--closed");
		$(".logged").removeClass("logged--closed");
		$(".nav__link--closed").removeClass("nav__link--closed");
	});
	$(".logged__logout").click(function (event) {
		$(".logged").addClass("logged--closed");
		$(".nav__link:nth-child(3)").addClass("nav__link--closed");
		$(".entry").removeClass("entry--closed");
	});
	$(".upButton").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	$(".promoPanel__button").click(function () {
		$(".promoPanel__button").removeClass("promoPanel__button--active");
		$(this).addClass("promoPanel__button--active");
		$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
		$(".promo__title").text($(this).text());
		var type = $(this).data("type");
		$(".promo ul").removeClass("open");
		$(".promo ul[data-type=" + type + "]").addClass("open");
	});
	$(".promoLimited__more").click(function () {
		$(".promoLimited__advanced").removeClass("open");
		$(this).siblings(".promoLimited__advanced").addClass("open");
		if ($(this).text() === "Hide") {
			$(this).removeClass("open");
			$(this).text("Read more");
			$(".promoLimited__advanced").removeClass("open");
		} else {
			$(".promoLimited__more").removeClass("open");
			$(".promoLimited__more").text("Read more");
			$(this).addClass("open");
			$(this).text("Hide");
		}
	});
	$(".promoWelcome__more").click(function () {
		$(".promoWelcome__advanced").removeClass("open");
		$(this).siblings(".promoWelcome__advanced").addClass("open");
		if ($(this).text() === "Hide") {
			$(this).removeClass("open");
			$(this).text("Read more");
			$(".promoWelcome__advanced").removeClass("open");
		} else {
			$(".promoWelcome__more").removeClass("open");
			$(".promoWelcome__more").text("Read more");
			$(this).addClass("open");
			$(this).text("Hide");
		}
	});
	$(".promoClassic__more").click(function () {
		$(".promoClassic__advanced").removeClass("open");
		$(this).siblings(".promoClassic__advanced").addClass("open");
		if ($(this).text() === "Hide") {
			$(this).removeClass("open");
			$(this).text("Read more");
			$(".promoClassic__advanced").removeClass("open");
		} else {
			$(".promoClassic__more").removeClass("open");
			$(".promoClassic__more").text("Read more");
			$(this).addClass("open");
			$(this).text("Hide");
		}
	});
	$(".bankingPanel__button").click(function () {
		$(".bankingPanel__button").removeClass("bankingPanel__button--active");
		$(this).addClass("bankingPanel__button--active");
		$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
		var type = $(this).data("type");
		$(".banking section").removeClass("open");
		$(".banking section[data-type=" + type + "]").addClass("open");
	});
	$(".bankingDeposit__button").click(function (event) {
		$(".bankingDeposit__openRow").addClass("closed");
		$(".bankingDeposit__row").removeClass("closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("closed");
		var submenu = parent.next();
		submenu.removeClass("closed");
	});
	$(".bankingDeposit__close").click(function (event) {
		$(".bankingDeposit__openRow").addClass("closed");
		$(".bankingDeposit__row").removeClass("closed");
	});

	$(".bankingWithdraw__button").click(function (event) {
		$(".bankingWithdraw__openRow").addClass("closed");
		$(".bankingWithdraw__row").removeClass("closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("closed");
		var submenu = parent.next();
		submenu.removeClass("closed");
	});
	$(".bankingWithdraw__close").click(function (event) {
		$(".bankingWithdraw__openRow").addClass("closed");
		$(".bankingWithdraw__row").removeClass("closed");
	});
	$(".gamesPanel__select").change(function (event) {
		var type = $(".gamesPanel__select option:selected").data("type");
		console.log(type);
		$(".games section").removeClass("open");
		$("." + type).addClass("open");
		if (type === "gamesAll") {
			$(".games section").addClass("open");
		}
	});
	$(".faq__question").click(function () {
		$(".faq__question").removeClass("closed");
		$(this).addClass("closed");
		$(".faq__answer").removeClass("open");
		$(this).siblings(".faq__answer").addClass("open");
	});
	$(".faq__answer").click(function () {
		$(".faq__answer").removeClass("open");
		$(".faq__question").removeClass("closed");
	});
	// ../blocks/accountDeposit/accountDeposit.js
	// ../blocks/accountWithdraw/accountWithdraw.js
	// ../blocks/accountPayments/accountPayments.js
	// ../blocks/accountHistory/accountHistory.js
	// ../blocks/accountResponsible/accountResponsible.js
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
		e.preventDefault();
		$(".loginBox").removeClass("closed");
		$(".header__infoLine").removeClass("open");
		$(".profileInfo").removeClass("open");
		$(".header__navItem:nth-child(2)").addClass("closed");
		$(".header__support").removeClass("open");
	});

	$(".up").click(function () {
		window.scrollTo(0, 0);
	});

	$(".header__navItem[data-type='profile']").click(function () {
		console.log("I am here!");
		e.preventDefault();
		$(".loginBox").addClass("closed");
		$(".header__infoLine").addClass("open");
		$(".profileInfo").addClass("open");
		$(".header__navItem.closed").removeClass("closed");
		$(".header__support").addClass("open");
	});
});