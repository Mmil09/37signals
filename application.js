$(document).ready(function() {

	$('.arrow-img').hide();

	var changeBack = function() {
		$('h1').html("<h1>Making collaboration productive and enjoyable for people every day.</h2>");
		$('h2').html("<h2>Frustration-free web-based apps for collaboration, sharing information, and making decisions.</h2>");
		$('.arrow-img').hide();
	}

	var bcChange = function() {
		$('h1').html("<h1 id='small-h1'><span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$('h2').html("<h2 id='small-h2'>Are you still managing projects with email? Are you still using Excel for you to-do lists?  It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.</h2>");		
		$('#arrow-bc').show();
	} 

	var hrChange = function() {
		$('h1').html("<h1 id='small-h1'><span>Highrise</span> remembers the important things about you'd normally forget.");
		$('h2').html("<h2 id='small-h2'>Keep a permanent record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.</h2>");		
		$('#arrow-hr').show();
	} 

	var cfChange = function() {
		$('h1').html("<h1 id='small-h1'>From near or far, <span>Campfire</span> helps teams work together over the web in real-time.");
		$('h2').html("<h2 id='small-h2'>Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  It's game changing.  We couldn't run our own business without Campfire.</h2>");		
		$('#arrow-cf').show();
	} 

	$('#bc').hover(bcChange, changeBack);
	$('#hr').hover(hrChange, changeBack);
	$('#cf').hover(cfChange, changeBack);
});

