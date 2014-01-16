$(document).ready(function() {
	$('.content').hide();
	$('#education').hover(function() {
		$(this).addClass("highlighted");
		$('.content').hide();
		$('#educationContent').show();
	});
	$('#experience').hover(function() {
		$(this).addClass("highlighted");
		$('.content').hide();
		$('#experienceContent').show();
	});
	$('#work').hover(function() {
		$(this).addClass("highlighted");
		$('.content').hide();
		$('#workContent').show();
	});
	$('#personal').hover(function() {
		$(this).addClass("highlighted");
		$('.content').hide();
		$('#personalContent').show();
	});
	$('#contentDiv').mouseleave(function() {
		$('.content').hide();
	});
});