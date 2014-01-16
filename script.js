$(document).ready(function() {
	$('.content').hide();
	$('#education').hover(function() {
		$('.content').hide();
		$('#educationContent').show();
	});
	$('#experience').hover(function() {
		$('.content').hide();
		$('#experienceContent').show();
	});
	$('#work').hover(function() {
		$('.content').hide();
		$('#workContent').show();
	});
	$('#personal').hover(function() {
		$('.content').hide();
		$('#personalContent').show();
	});
	$('#contentDiv').mouseleave(function() {
		$('.content').hide();
	});
});