$(document).ready(function() {
	$('#header').click(function() {
		$(this).toggleClass("clicked");
		$('.categories').toggle(showOrHide);
		$(this).animate({
			marginTop: "75px"
		}, 1000 );
	});
//	$('.categories').hide();
	$('.categories').click(function() {
		$(this).toggleClass("clicked");
	});

	$('.content').hide();
	$('#education').hover(function() {
		$(this).toggleClass("highlighted");
		$('.content').hide();
		$('#educationContent').show();
	});
	$('#experience').hover(function() {
		$(this).toggleClass("highlighted");		
		$('.content').hide();
		$('#experienceContent').show();
	});
	$('#work').hover(function() {
		$(this).toggleClass("highlighted");
		$('.content').hide();
		$('#workContent').show();
	});
	$('#personal').hover(function() {
		$(this).toggleClass("highlighted");
		$('.content').hide();
		$('#personalContent').show();
	});

});