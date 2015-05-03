//The following code could be a lot better. At least it's somewhat organized.
//It just styles elements in ways that css wouldn't be able to do properly.

$(window).load(function(){
	modifyDOM(function(){
		called1(function(){
			called2();
		});	
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
	
	temp = parseInt($(".link").css("line-height")) / 2 + "px";
	
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

function called1(callback){
	
	$(".centerThis").each(function(index) {
		$(this).css({
			marginTop: ($(this).parent().height() - $(this).height()) / 2,
			marginBottom: ($(this).parent().height() - $(this).height()) / 2,
		});
	});
	

	
	callback();
}


function called2(callback){
	window.tempWidth = 0;
	
	window.tempMargin = parseFloat($(".home .section .bottom .link").css("margin").split(" ")[1]);
	
	$(".home .section .bottom .link").css("margin", "0px");
	$(".home .section .bottom .link").each(function(index) {
		tempWidth += $(this).outerWidth();
	});
	
	$(".home .section .bottom .link").css({
		marginLeft: tempMargin,
		marginRight: tempMargin,
	});
	tempWidth += tempMargin * 10;
	$(".home .section .bottom").css({
		width: tempWidth + "px",
		marginLeft: ($(".home .section").innerWidth() - tempWidth) / 2 + "px",
		marginRight: ($(".home .section").innerWidth() - tempWidth) / 2 + "px",
		borderRadius: "7% 7% 0% 0% / 40% 40% 0% 0%",
	});
}

function scrolling(){
	
}