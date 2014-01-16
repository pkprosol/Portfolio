$(document).ready(function() {
	$('.categories').hide();
	$('#header').click(function() {
		$(this).toggleClass("clicked");
		$('.categories').toggle();
	});

//	$('.categories').hide();
	$('.categories').click(function() {
		$(this).toggleClass("clicked");
	});

	$('.content').hide();

});