$(".live-sports__item").click(function(event){
	$(".live-sports__item").removeClass("open");
	$(".live-sports__overview").removeClass("open");
	$(this).addClass("open");
	$(this).next().addClass("open");
});
