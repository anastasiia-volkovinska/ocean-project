"use strict";

$(document).ready(function () {
	$(".entry__submit, .screen__login").click(function (event) {
		event.preventDefault();
		$(".entry").addClass("entry--closed");
		$(".logged").removeClass("logged--closed");
		$(".nav__link--closed").removeClass("nav__link--closed");
		$(".screen__deposit").toggleClass("closed");
		$(".screen__login").toggleClass("closed");
		$(".screen__register").toggleClass("closed");
	});
	$(".logged__logout").click(function (event) {
		$(".logged").addClass("logged--closed");
		$(".nav__link:nth-child(3)").addClass("nav__link--closed");
		$(".entry").removeClass("entry--closed");
		$(".screen__deposit").toggleClass("closed");
		$(".screen__login").toggleClass("closed");
		$(".screen__register").toggleClass("closed");
	});
	$(".upButton").click(function () {
		$('html, body').animate({ scrollTop: 0 }, 'slow');
	});
	$(window).on("scroll", function (event) {
		console.log("I am scrolled!");
		if (window.pageYOffset > 100) {
			$(".upButton").addClass("visible");
		} else {
			$(".upButton").removeClass("visible");
		}
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
	$(".virtual-sportsPanel__button").click(function () {
		$(".virtual-sportsPanel__button").removeClass("virtual-sportsPanel__button--active");
		$(this).addClass("virtual-sportsPanel__button--active");
		$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
		$(".virtual-sports__content").addClass("closed");
		var type = $(this).data("type");
		$(".virtual-sports__content[data-type=" + type + "]").removeClass("closed");
	});
	$(".promoAll__more").click(function () {
		$(".promoAll__advanced").removeClass("open");
		$(this).siblings(".promoAll__advanced").addClass("open");
		if ($(this).text() === "Hide") {
			$(this).removeClass("open");
			$(this).text("Read more");
			$(".promoAll__advanced").removeClass("open");
		} else {
			$(".promoAll__more").removeClass("open");
			$(".promoAll__more").text("Read more");
			$(this).addClass("open");
			$(this).text("Hide");
		}
	});
	$(".promoBig__more").click(function (event) {
		$(".promo__title:not(.bonus)").addClass("closed");
		$(".promoBonus").addClass("open");
		$(".promoAll").removeClass("open");
		$(".promoBig").removeClass("open");
	});
	$(".promoBonus__button").click(function (event) {
		$(".promo__title").removeClass("closed");
		$(".promoBonus").removeClass("open");
		$(".promoAll").addClass("open");
		$(".promoBig").addClass("open");
	});
	$(".live-sports__item").click(function (event) {
		$(".live-sports__item").removeClass("open");
		$(".live-sports__overview").removeClass("open");
		$(this).addClass("open");
		$(this).next().addClass("open");
	});
	$(".center__item").click(function () {
		$(".center__item").removeClass("open");
		$(this).addClass("open");
		$(".matches__list").removeClass("open");
		$(this).next(".center__matches").find(".matches__list").addClass("open");
	});
	$(".matches__item").click(function () {
		$(".sports-accordeon").removeClass("open");
		$(this).next(".sports-accordeon").addClass("open");
	});
	$(".sports-accordeon__item").click(function () {
		$(".sports-accordeon__item").removeClass("open");
		$(this).addClass("open");
		$(".bets").removeClass("open");
		$(this).next(".bets").addClass("open");
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
	$(".games__more").click(function () {
		$(".gamesNew.closed").addClass("open");
		$(this).addClass("closed");
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
	$(".popupRegister__tab").click(function () {
		$(".popupRegister__tab").removeClass("active");
		$(this).addClass("active");
		var data = $(this).data("type");
		$(".popupRegister__item").removeClass("closed");
		$(".popupRegister__item[data-type=" + data + "]").addClass("closed");
	});
	$(".overlay, .popupRegister__close, .popupLogin__close, .popupDeposit__close, .popupForgot__close").click(function () {
		$(".overlay").removeClass("open");
		$(".popupRegister, .popupLogin, .popupDeposit, .popupForgot").removeClass("open");
	});
	$(".popupRegister__submit").click(function (e) {
		e.preventDefault();
		$(".popupRegister__form").toggleClass("closed");
	});

	function openRegistration() {
		$(".popupRegister").addClass("open");
		$(".overlay").addClass("open");
	}
	function openLogin() {
		$(".popupLogin").addClass("open");
		$(".overlay").addClass("open");
	}
	function openForgot() {
		$(".popupForgot").addClass("open");
		$(".overlay").addClass("open");
	}
	function openDeposit() {
		$(".popupDeposit").addClass("open");
		$(".overlay").addClass("open");
	}
	$(".entry__icon").click(function () {
		openForgot();
	});
	$(".entry__register, .screen__register").click(function () {
		openRegistration();
	});
	$(".accountDeposit__button").click(function (event) {
		$(".accountDeposit__openRow").addClass("accountDeposit__openRow--closed");
		$(".accountDeposit__row").removeClass("accountDeposit__row--closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("accountDeposit__row--closed");
		var submenu = parent.next();
		submenu.removeClass("accountDeposit__openRow--closed");
		// parent.next().removeClass("accountDeposit__openRow--closed");
	});
	$(".accountDeposit__close").click(function (event) {
		$(".accountDeposit__openRow").addClass("accountDeposit__openRow--closed");
		$(".accountDeposit__row").removeClass("accountDeposit__row--closed");
	});
	$(".accountWithdraw__button").click(function (event) {
		$(".accountWithdraw__openRow").addClass("accountWithdraw__openRow--closed");
		$(".accountWithdraw__row").removeClass("accountWithdraw__row--closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("accountWithdraw__row--closed");
		var submenu = parent.next();
		submenu.removeClass("accountWithdraw__openRow--closed");
		// parent.next().removeClass("accountWithdraw__openRow--closed");
	});
	$(".accountWithdraw__close").click(function (event) {
		$(".accountWithdraw__openRow").addClass("accountWithdraw__openRow--closed");
		$(".accountWithdraw__row").removeClass("accountWithdraw__row--closed");
	});
	$(".accountPayments__button").click(function (event) {
		$(".accountPayments__openRow").addClass("accountPayments__openRow--closed");
		$(".accountPayments__row").removeClass("accountPayments__row--closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("accountPayments__row--closed");
		var submenu = parent.next();
		submenu.removeClass("accountPayments__openRow--closed");
		// parent.next().removeClass("accountPayments__openRow--closed");
	});
	$(".accountPayments__close").click(function (event) {
		$(".accountPayments__openRow").addClass("accountPayments__openRow--closed");
		$(".accountPayments__row").removeClass("accountPayments__row--closed");
	});

	$('.input_file input[type=file]').change(function () {
		var t = $(this).val();
		if (t.indexOf('C:\\fakepath\\') + 1) t = t.substr(12);
		var e = $(this).next().find('.fake_file_input');
		e.val(t);
	});
	$('.clear_input').click(function () {
		var a = $(this).parent();
		var e = a.find('.fake_file_input');
		var t = a.find('input[type=file]');
		t.replaceWith('<input type="file" name="" >');
		e.val('');
	});
	$(".accountHistory__button").click(function (event) {
		$(".accountHistory__openRow").addClass("accountHistory__openRow--closed");
		$(".accountHistory__row").removeClass("accountHistory__row--closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("accountHistory__row--closed");
		var submenu = parent.next();
		submenu.removeClass("accountHistory__openRow--closed");
		// parent.next().removeClass("accountHistory__openRow--closed");
	});
	$(".accountHistory__close").click(function (event) {
		$(".accountHistory__openRow").addClass("accountHistory__openRow--closed");
		$(".accountHistory__row").removeClass("accountHistory__row--closed");
	});
	$(".accountResponsible__button").click(function (event) {
		$(".accountResponsible__openRow").addClass("accountResponsible__openRow--closed");
		$(".accountResponsible__row").removeClass("accountResponsible__row--closed");
		var button = $(event.target);
		var parent = button.parent().parent();
		parent.addClass("accountResponsible__row--closed");
		var submenu = parent.next();
		submenu.removeClass("accountResponsible__openRow--closed");
		// parent.next().removeClass("accountResponsible__openRow--closed");
	});
	$(".accountResponsible__close").click(function (event) {
		$(".accountResponsible__openRow").addClass("accountResponsible__openRow--closed");
		$(".accountResponsible__row").removeClass("accountResponsible__row--closed");
	});
	$(".accountResponsible__exclusionButton").click(function () {
		$(".accountResponsible__exclusionButton").addClass("clicked");
		$(".accountResponsible__limitButton").removeClass("clicked");
		$(".accountResponsible__exclusion").removeClass("closed");
		$(".accountResponsible__header").addClass("closed");
		$(".accountResponsible__table tbody").addClass("closed");
	});
	$(".accountResponsible__limitButton").click(function () {
		$(".accountResponsible__limitButton").addClass("clicked");
		$(".accountResponsible__exclusionButton").removeClass("clicked");
		$(".accountResponsible__exclusion").addClass("closed");
		$(".accountResponsible__header").removeClass("closed");
		$(".accountResponsible__table tbody").removeClass("closed");
	});
	$(".accountPanel__select").change(function (event) {
		var type = $(".accountPanel__select option:selected").data("type");
		console.log(type);
		$(".account>div").removeClass("open");
		$("." + type).addClass("open");
	});
	$(".accountPanel__withdraw").click(function () {
		$(this).addClass("active");
		$(".accountPanel__deposit").removeClass("active");
		$(".account>div").removeClass("open");
		$(".accountWithdraw").addClass("open");
	});
	$(".accountPanel__deposit").click(function () {
		$(this).addClass("active");
		$(".accountPanel__withdraw").removeClass("active");
		$(".account>div").removeClass("open");
		$(".accountDeposit").addClass("open");
	});
	$(".screen__latest").click(function () {
		$(".game__fav, .screen").toggleClass("open");
	});
	$(".screen__fullscreen").click(function () {
		var game = document.querySelector(".screen__img");
		launchFullScreen(game);
	});
	function launchFullScreen(element) {
		if (element.requestFullScreen) {
			element.requestFullScreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		}
	}
	$(".screen__close").click(function () {
		$(".screen").addClass("closed");
	});
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