$(".screen__latest").click(function(){
	$(".game__fav, .screen").toggleClass("open");
});
$(".screen__fullscreen").click(function(){
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
$(".screen__close").click(function(){
	$(".screen").addClass("closed");
});
