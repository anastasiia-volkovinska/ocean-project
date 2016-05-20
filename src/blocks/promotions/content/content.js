$(".promoLimited__more").click(function(){
	$(".promoLimited__advanced").removeClass("open");
	$(this).siblings(".promoLimited__advanced").addClass("open");
	if($(this).text() === "Hide"){
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
$(".promoWelcome__more").click(function(){
	$(".promoWelcome__advanced").removeClass("open");
	$(this).siblings(".promoWelcome__advanced").addClass("open");
	if($(this).text() === "Hide"){
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
$(".promoClassic__more").click(function(){
	$(".promoClassic__advanced").removeClass("open");
	$(this).siblings(".promoClassic__advanced").addClass("open");
	if($(this).text() === "Hide"){
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
