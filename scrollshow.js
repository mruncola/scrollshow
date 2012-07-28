/**************************
*
*	Scrollshow jQuery Plugin v 0.1
*	(c) Doug McKay - http://dougmckay.com
*	License: MIT (http://www.opensource.org/licenses/mit-license.php)
*
**************************/

/*
	Use case:
	1. As I scroll down the page - I want to check if my object is visible on the screen. If it is I want to fire a callback.
	2. My element is already visible on the screen at initialization time. If it is I want to fire a callback.
*/

(function( $ ) {
	
	function isVisible(el){
		return el.offset().top <= ($(document).scrollTop()+$(window).height());
	}
	$.fn.scrollshow = function( options ) {
		return this.each(function(){
			$this = $(this);
			if(! isVisible($this) ){
				/* NOT IN VIEWPORT YET */
				$binding = $(window).on("scroll", function(){ 
					if( isVisible($this) ){
						$(window).off("scroll");
						options["callback"]();
					}
				});
			} else {
				options["callback"]();
			}
		});
	};
})( jQuery );