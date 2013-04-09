function swapImages(){
	var $active = $('#img-list li.active');
	var $next = ($('#img-list li.active').next().length > 0) ? $('#img-list li.active').next() : $('#img-list li:first');
	$active.removeClass('active');
	$next.addClass('active');
}


$(document).ready(function() {
	$("#forward-button").click(function() {
		var currImg = $(".selected-img");
		$(".selected-img").parent().next().find("img").addClass("selected-img");
		currImg.removeClass("selected-img");
	});
	
	//1.automatic slideshow
	var intervalID;
		
	$("#play-pause-button").click(function() {
		if ($(this).hasClass("ui-icon-play")) {
			intervalID = setInterval("swapImages()", 100);
			$(this).removeClass("ui-icon-play");
			$(this).addClass("ui-icon-pause");
		} else if ($(this).hasClass("ui-icon-pause")) {
			clearInterval(intervalID);
			$(this).addClass("ui-icon-play");
			$(this).removeClass("ui-icon-pause");
		}
	});
	
	//2.thumbmail
	$(".photo-group img").click(function(){
		var $newCenter = $(this).attr("src");
		$newCenter = $newCenter.split(".")[0]
		$newCenter = $newCenter.concat("-large.jpg")
		$(".center").attr("src",$newCenter);			
	});
	
	intervalID = setInterval('swapImages()', 100);
});
