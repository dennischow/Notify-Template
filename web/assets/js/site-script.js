/* 
-- Author --

Name : Dennis Chow; 
Website : http://www.fat-cow.net
*/

/* Document Event */
$(document).on('ready',function(e){
	DOM.init();
});

/* Window Event */
$(window).on('load',function(e){

}).on('resize',function(e){

}).on('scroll',function(e){

});

/* Site Scripting */
var DOM = {
	init : function(e){

		// Display message to inspector if js connected
		console.log('Document Ready');

		// jQuery Flexslider
		$('.flexslider').flexslider({
			animation: "slide",
			slideshow : false, 
			useCSS : true, 
			controlNav: true,
			animationLoop: false,
			itemWidth: 50,
			itemMargin: 5,
			start: function(e){
				$('LI', e).removeClass('invisiable');
			}
		});

		// Testimonials Section
		$('.site-testimonials').each(function(){
			var testSection = $(this);
			var personNameBox = testSection.find('.title.person');
			var listItem = $('.thumbnail-list LI', testSection);

			listItem.on('click',function(e){
				// Grab data
				var thisList = $(this);
				var thisImg = thisList.find('IMG');
				var thisAlt = thisImg.attr('alt')

				// Feed data to the box
				personNameBox.text( thisAlt );
			});
		});

		// Subscribe Form Submit
		$('.ui-btn-submit').on('click',function(e){
			var subScribeForm = $(this).closest('FORM');
			var emailField = $('#email_address');

			if( emailField.val() !== '' ){
				console.log( 'Thank you! ' + emailField.val() );
			}else{
				console.warn( 'Email address is empty' );
			}

			return false;
		});

		// Misc. manipulation
		$('I.icon').attr('aria-hidden',true);

		$('A').on('click',function(e){
			e.preventDefault();
		});

	}
}