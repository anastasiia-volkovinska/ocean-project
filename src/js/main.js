$(document).ready(function () {
	$('.slider').slick({
		autoplay: true,
		infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
		arrows: false,
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
