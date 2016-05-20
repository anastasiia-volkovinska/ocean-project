$(".gamesPanel__select").change(function(event){
	var type = $(".gamesPanel__select option:selected").data("type");
	console.log(type);
	$(".games section").removeClass("open");
	$("."+type).addClass("open");
	if(type === "gamesAll") {
		$(".games section").addClass("open");
	}
});
