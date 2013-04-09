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
	setInterval('swapImages()', 2000);
		
	//2.thumbmail
	$(".photo-group img").click(function(){
		var $newCenter = $(this).attr("src");
		$newCenter = $newCenter.split(".")[0]
		$newCenter = $newCenter.concat("-large.jpg")
		$(".center").attr("src",$newCenter);			
	});
});
