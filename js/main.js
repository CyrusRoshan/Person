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
		borderRadius: outerHeight * 2/12 + "px"
	});
	
	
});
