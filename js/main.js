$(window).load(function() {
    // DOM modifying stuff goes here:
	$(".navLink").css("line-height", "1");
	window.navLinkHeight = $(".navLink").css("line-height");
	window.htmlWidth = $("html").width();
	var numLinks = $(".navLink").length;
	var height = parseInt(navLinkHeight);
	var width = $(".navLink").width();
	
	var totalWidth = 0;
	$(".navLink").each(function(index) {
		totalWidth += parseInt($(this).width(), 10);
	});
	
	$(".navLink").css({
		paddingLeft: height + "px",
		paddingRight: height + "px",
		paddingTop: height + "px",
		paddingBottom: height + "px",
		marginLeft: (((.75 * htmlWidth) - totalWidth) / numLinks - (2 * height)) / 2 + "px",
		marginRight: (((.75 * htmlWidth) - totalWidth) / numLinks - (2 * height)) / 2 + "px"
	});
});
