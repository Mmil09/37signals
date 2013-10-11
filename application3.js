$(document).ready(function() {
	
	/* var defaultDesc = $('#headline').html(); */
	var headlineH1;
	var headlineH2;

	var defaultHeadline = function() {

		headlineH1 = "Making collaboration productive and enjoyable for people every day.";
		headlineH2 = "Frustration-free web-based apps for collaboration, sharing information, and making decisions.";
		$('h1').html("<h1>" + headlineH1 + "</h1>");
		$('h2').html("<h2>" + headlineH2 + "</h2>");

	}

	var chooseHeadline = function(object) {

	var object;
	
	if object == $('#bc')) {
		headlineH1 = "<span>Basecamp</span> is the project management tool you wish you had on your last project.";
		headlineH2 = "Are you still managing projects with email? Are you still using Excel for you to-do lists?  It's time to upgrade to Basecamp. Manage projects and collaborate with your team and clients the modern way.";
	}

	else object == $('#hr')) {
		headlineH1 = "<span>Highrise</span> remembers the important things about you'd normally forget.";
		headlineH2 = "Keep a permanent record of people you do business with.  Know who you talked to, when you talked to them, what was said, and when to follow up next.  Over 20,000,000 contacts are tracked using Highrise.";
	}

	else object == $('#cf')) {
		headlineH1 = "From near or far, <span>Campfire</span> helps teams work together over the web in real-time.";
		headlineH2 = "Share ideas, discussions, concepts, images, code samples, videos, mockups, and documents in a real-time private chat room.  It's game changing.  We couldn't run our own business without Campfire.";
	}

	else {}

	$('h1').html("<h1>" + headlineH1 + "</h1>");
	$('h2').html("<h2>" + headlineH2 + "</h2>");

	}

	$('.product').hover(chooseHeadline($(this)), defaultHeadline($(this)));

	
});
/*
	$('.product').mouseenter(function() {
		$('#headline').empty();
	});

	$('.product').mouseleave(function() {
		$('#headline').append(defaultDesc);
	});
	
	
	$('#bc').mouseenter(function() {
		$('#headline').html(
			'<h1>fdafdsa</h1>
			 <h2>afdaf</h2>'
			 );
	});
*/
