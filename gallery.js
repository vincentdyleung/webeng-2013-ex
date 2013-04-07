$(document).ready(function() {
	$("#forward-button").click(function() {
		var currImg = $(".selected-img");
		$(".selected-img").parent().next().find("img").addClass("selected-img");
		currImg.removeClass("selected-img");
	});
});