$(document).ready(function () {

	$(window).load(function() {
		$(".se-pre-con").fadeOut("slow");;
	});

	$(".plain").click(changeFooter);

	$(".clicked").click(revertFooter);

  	$(".day div#day1").click(showSteve1);

  	$(".day div#day2").click(showSteve2);

  	$(".day div#day3").click(showSteve3);

  	$(".day div#day4").click(showSteve4);

  	$(".day div#day5").click(showSteve5);

  	$(".day div#day6").click(showSteve6);

  	$(".day div#day7").click(showSteve7);

  	$(".day div#day8").click(showSteve8);

  	$(".day div#day9").click(showSteve9);

  	$(".day div#day10").click(showSteve10);

  	$(".day div#day11").click(showSteve11);

  	$(".day div#day12").click(showSteve12);

	$(".back").click(hideSteve);
});

function changeFooter () {
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function revertFooter () {
	$(".clicked").hide("2000");
	$(".plain").show("2000");
}

function showSteve1 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve1").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve2 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve2").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve3 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve3").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve4 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve4").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve5 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve5").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve6 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve6").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve7 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve7").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve8 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve8").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve9 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve9").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve10 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve10").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve11 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve11").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function showSteve12 () {
	$(".adventView").addClass("hide");	
	$("header").hide();
	$("#intro").hide();
	$(document).scrollTop(0);
	$("#steve12").removeClass("hide");
	$("body").addClass("snow");
	$(".plain").hide("2000");
	$(".clicked").show("2000");
}

function hideSteve () {
	location.reload();
	$(document).scrollTop(0);
}
