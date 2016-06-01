$(".virtual-sportsPanel__button").click(function(){
	$(".virtual-sportsPanel__button").removeClass("virtual-sportsPanel__button--active");
	$(this).addClass("virtual-sportsPanel__button--active");
	$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
	$(".virtual-sports__content").addClass("closed");
	var type = $(this).data("type");
	$(".virtual-sports__content[data-type="+type+"]").removeClass("closed");
});
