$(".promoPanel__button").click(function(){
	$(".promoPanel__button").removeClass("promoPanel__button--active");
	$(this).addClass("promoPanel__button--active");
	$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
	$(".promo__title").text($(this).text());
	var type = $(this).data("type");
	$(".promo ul").removeClass("open");
	$(".promo ul[data-type="+type+"]").addClass("open");
});
