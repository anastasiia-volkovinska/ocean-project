$(".bankingPanel__button").click(function(){
	$(".bankingPanel__button").removeClass("bankingPanel__button--active");
	$(this).addClass("bankingPanel__button--active");
	$(".breadcrumbs__item--current .breadcrumbs__link").text($(this).text());
	var type = $(this).data("type");
	$(".banking section").removeClass("open");
	$(".banking section[data-type="+type+"]").addClass("open");
});
