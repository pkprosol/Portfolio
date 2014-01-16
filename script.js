$(document).ready(function() {
	$('.categories').hide();
	$('.content').hide();

	$('#header').click(function() {
		$(this).toggleClass("clicked");
		$('.categories').toggle();
		var clickedStatus = $('#header').hasClass("clicked");
		console.log(!clickedStatus);
		if(!clickedStatus) {
			$('.content').hide();
		}
	});

//	$('.categories').hide();
	$('.categories').click(function() {
		$(this).toggleClass("clicked");
	});

	$('#education').click(function() {
		$('#educationContent').toggle();
	});	


});