/**************************
*
*	Scrollshow jQuery Plugin v 0.1
*	(c) Doug McKay - http://dougmckay.com
*	License: MIT (http://www.opensource.org/licenses/mit-license.php)
*
**************************/

/**************************
*	Case: attached to object [COMPLETE]
*	1. As I scroll down the page - I want to check if my object is visible on the screen. If it is I want to fire a callback.
*	2. My element is already visible on the screen at initialization time. If it is I want to fire a callback.
**************************/

Scrollshow allows you to fire a callback when an object on the page enters the view port.

Example:

$(".item").scrollshow( { 
	callback : function(){
		alert("ITEM IS ON THE PAGE!");
	}
} );