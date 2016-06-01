$(".accountPanel__select").change(function(event){
	var type = $(".accountPanel__select option:selected").data("type");
	console.log(type);
	$(".account>div").removeClass("open");
	$("."+type).addClass("open");
});
$(".accountPanel__withdraw").click(function(){
	$(this).addClass("active");
	$(".accountPanel__deposit").removeClass("active");
	$(".account>div").removeClass("open");
	$(".accountWithdraw").addClass("open");
});
$(".accountPanel__deposit").click(function(){
	$(this).addClass("active");
	$(".accountPanel__withdraw").removeClass("active");
	$(".account>div").removeClass("open");
	$(".accountDeposit").addClass("open");
});
