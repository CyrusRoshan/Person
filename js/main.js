$(window).load(function() {
    // DOM modifying stuff goes here:
	$(".navLink").css("line-height", "1");
	window.navLinkHeight = $(".navLink").css("line-height");
	window.htmlWidth = $("html").width();
	var numLinks = $(".navLink").length;
	var height = parseInt(navLinkHeight);
	var width = $(".navLink").width();
	var outerHeight = $(".navLink").outerHeight();
	
	var totalWidth = 0;
	$(".navLink").each(function(index) {
		totalWidth += parseInt($(this).width(), 10);
	});
	
	$("#navSection").css({
		height: height * 2 + "px"
	});	
	
	$(".navLink").css({
		paddingTop: height * .25 + "px",
		paddingBottom: height * .25 + "px",
		paddingLeft: height * .5 + "px",
		paddingRight: height * .5 + "px",
		// change padding top and bottom to height * .5 with a slow animation when switching between sections, also change the background color to get more opaque and keep the default background color very transparent. onhover change the background color to a more opaque white and the text to a darker gray variant of the original background color
		//borderRadius: outerHeight * 2/12 + "px"
	});
	
	$(".navigation").css({
		borderBottomLeftRadius: $(".navigation").height() * .25,
		borderBottomRightRadius: $(".navigation").height() * .25,
	});
	
	$(".home").css({
		paddingTop: $(".navigation").height() + 20 + "px"
	});	
	
	$(".block").each(function(index) {

	});
	
	
	
});
