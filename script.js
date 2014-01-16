$(document).ready(function() {
	$('#header').hover(function() {
		$(this).toggleClass("highlighted");
	});
	$('#header').click(function() {
		$(this).animate({ padding-top: "-=50",}, 1000);
	});
	$('.categories').hide();
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
	$('#contentDiv').mouseleave(function() {
		$('.content').hide();
	});
});