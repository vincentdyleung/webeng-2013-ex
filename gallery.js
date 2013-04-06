function swapImages(){
	var $active = $('#img-list li.active');
	var $next = ($('#img-list li.active').next().length > 0) ? $('#img-list li.active').next() : $('#img-list li:first');
	$active.removeClass('active');
	$next.addClass('active');
	}		
			


$(document).ready(function() {
	$("#slide-control .ui-icon").button().click(function() {
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
