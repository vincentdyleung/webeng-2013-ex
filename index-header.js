$(document).ready(function() {
           			$.touch.triggerMouseEvents = true;

			$.touch.ready(function() {
				// hide all screens but home screen when application has started
				$('.screen').not('#home').hide();
			});

			$(header).touchable({
				gesture: function(e, touchHistory) {
					var touches = $(this).touches();
					if (touches.length > 1) {
						// first filter the touch history down to the appropriate events
						var th = touchHistory.stop({
							type: ['touchdown', 'touchup']
						}).filter({
							type: 'touchmove',
							time: '1..100'
						});
						// then try to match it
						if (th.match([{ touch: touches[0], deltaY: '<-100'}, { touch: touches[1], deltaY: '<-100'}])) {
//							message('two swipe up');
							window.location.href="index.html"; 
						}
					} else {
						// first filter the touch history down to the appropriate events
						var th = touchHistory.stop({
							type: ['touchdown', 'touchup']
						}).filter({
							touch: touchHistory.get(0).touch,
							type: 'touchmove',
							time: '1..100'
						});
						// then try to match it
						if (th.match({ deltaX: '<-100' })) {
                                                        window.location.href="gallery.html"; 
    
						} else if (th.match({ deltaX: '>100' })) {				
                                                        window.location.href="article.html"; 
						}
					}
				}
			});
 });      