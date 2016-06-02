$(".promoAll__more").click(function(){
	$(".promoAll__advanced").removeClass("open");
	$(this).siblings(".promoAll__advanced").addClass("open");
	if($(this).text() === "Hide"){
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
$(".promoBig__more").click(function(event){
	$(".promo__title:not(.bonus)").addClass("closed");
	$(".promoBonus").addClass("open");
	$(".promoAll").removeClass("open");
	$(".promoBig").removeClass("open");
});
$(".promoBonus__button").click(function(event){
	$(".promo__title").removeClass("closed");
	$(".promoBonus").removeClass("open");
	$(".promoAll").addClass("open");
	$(".promoBig").addClass("open");
});
