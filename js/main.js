//The following code could be a lot better. At least it's somewhat organized.
//It just styles elements in ways that css wouldn't be able to do properly.

$(window).load(function(){
	modifyDOM(function(){
		center();	
	});
});
	
function modifyDOM(callback){
    // DOM modifying stuff goes here:
	$(".navLink").css("line-height", "1");
	window.navLinkHeight = $(".navLink").css("line-height");
	window.htmlWidth = $("html").width();
	var numLinks = $(".navLink").length;
	var height = parseInt(navLinkHeight);
	var width = $(".navLink").width();
	var outerHeight = $(".navLink").outerHeight();
	var totalWidth = 0;

	
	$(".navLink").css({
		paddingTop: height * .25 / 2 + "px",
		paddingBottom: height * .25 / 2 + "px",
		paddingLeft: height * .5 / 2 + "px",
		paddingRight: height * .5 / 2 + "px",
		//borderRadius: outerHeight * 2/12 + "px"
		marginLeft: height * .5 / 2 + "px",
		marginRight: height * .5 / 2 + "px",
	});
	
	$(".navigation .section").css({
		paddingTop: $(".navLink").outerHeight() / 9,
		paddingBottom: $(".navLink").outerHeight() / 9 * 2,
	});	
	
	$(".home").css({
		paddingTop: $(".navigation").height() + 50 + "px"
	});	
	
	
	//$(".link").css("line-height", "1"); css rule takes care of this. This is needed for chrome so that parseInt'ing the line-height gives a numerical value and not an error.
	
	var temp = parseInt($(".link").css("line-height")) / 2 + "px";
	
	$(".link").css({
		padding: temp,
	});
	
	$(".home .section .bottom").css({
		paddingTop: temp,
		paddingBottom: temp,
	});
	
	$(".home .section .bottom .link").css({
		borderRadius: $(".home .section .bottom .link").height() / 6 + "px",
	});
	
	$(".home .section .top").css({
		height: $(window).height() - $(".home").outerHeight() + $(".home .section .top").height() + "px",
	});
	
	$(".block .title").css({
		paddingTop: parseInt($(".block .title").css("line-height")) / 9 + "px",
		paddingBottom: parseInt($(".block .title").css("line-height")) / 9 * 2.5 + "px",
	});
	

	
	callback();
};

function center(){
	$(".centerThis").each(function(index) {
		$(this).css({
			marginTop: ($(this).parent().height() - $(this).height()) / 2,
			marginBottom: ($(this).parent().height() - $(this).height()) / 2,
		});
	});
}

function scrolling(){
	
}