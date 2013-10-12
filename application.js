$(document).ready(function() {

	var defaultH1 = "Making collaboration productive and enjoyable for people every day.";
	var defaultH2 = "Frustration-free web-based apps for collaboration, sharing information, and making decisions.";
	var bcH1 = "<span>Basecamp</span> is the project management tool you wish you had on your last project.";
	var bcH2 = "Are you still managing projects with email? Are you still using Excel for you to-do lists?  It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.";
	var hrH1 = "<span>Highrise</span> remembers the important things about you'd normally forget.";
	var hrH2 = "Keep a permanent record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.";
	var cfH1 = "From near or far, <span>Campfire</span> helps teams work together over the web in real-time.";
	var cfH2 = "Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  It's game changing.  We couldn't run our own business without Campfire.";

	$('.arrow-img').hide();

	var changeBack = function() {
		$('#headline').html("<h1>" + defaultH1 + "</h1>" + "<h2>" + defaultH2 + "</h2>");
		$('.arrow-img').hide();
	}

	var bcChange = function() {
		$('#headline').html("<h1 id='small-h1'>" + bcH1 + "</h1>" + "<h2 id='small-h2'>" + bcH2 + "</h2>");	
		$('#arrow-bc').show();
	} 

	var hrChange = function() {
		$('#headline').html("<h1 id='small-h1'>" + hrH1 + "</h1>" + "<h2 id='small-h2'>" + hrH2 + "</h2>");	
		$('#arrow-hr').show();
	} 

	var cfChange = function() {
		$('#headline').html("<h1 id='small-h1'>" + cfH1 + "</h1>" + "<h2 id='small-h2'>" + cfH2 + "</h2>");	
		$('#arrow-cf').show();
	} 

	$('#bc').hover(bcChange, changeBack);
	$('#hr').hover(hrChange, changeBack);
	$('#cf').hover(cfChange, changeBack);
});

