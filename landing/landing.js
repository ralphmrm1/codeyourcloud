$(document).ready(function() {
    $("#fullpage").onepage_scroll({
		sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
		easing: "ease",                  
		animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
		pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
		updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
		beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
		afterMove: function(index, next_el) {
			if(index === 6){
				$("#earth").slideDown();
			}
			else{
				$("#earth").slideUp();
			}
			if(index === 9){
				$("#search").slideDown();
			}
			else{
				$("#search").slideUp();
			}
			if(index === 5){
				$("#drive").slideDown();
			}
			else{
				$("#drive").slideUp();
			}
			if(index === 7){
				$("#devices").slideDown();
			}
			else{
				$("#devices").slideUp();
			}
	  	},
		loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
		keyboard: true,                  // You can activate the keyboard controls
		responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
	});
});
var CLIENT_ID = '953350323460-0i28dhkj1hljs8m9ggvm3fbiv79cude6.apps.googleusercontent.com';
var SCOPES = ['https://www.googleapis.com/auth/drive.install','https://www.googleapis.com/auth/drive','https://www.googleapis.com/auth/drive.file'];
function check_login(){
	gapi.auth.authorize({'client_id': CLIENT_ID, 'scope': SCOPES.join(' '), 'immediate': true},handleLogin);
}
function handleLogin(authResult) {
	if (authResult) {
        $(".login_button").html("Start Editing");
	} 
	else {
		//still not logged in
	}
}
function redirect(){
	window.location.href="https://accounts.google.com/o/oauth2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile + https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive + https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.install + https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&state=%2Fprofile&redirect_uri=https%3A%2F%2Fcodeyourcloud.com&response_type=token&client_id=953350323460-0i28dhkj1hljs8m9ggvm3fbiv79cude6.apps.googleusercontent.com";
}
var string_to_type = "window.href = \"https://codeyourcloud.com\";";
var char_type = 0;
window.setInterval(function(){
	if(char_type === string_to_type.length){
		char_type=0;
		$("#typer").html("");
	}
	else{
    	addChar(char_type);
		char_type++;
	}
},200);
function addChar(i){
	$("#typer").html($("#typer").html() + string_to_type.charAt(i));
}
//SEARCH
$("#search").slideUp();
//EARTH
$("#earth").slideUp();
//L
$("#drive").slideUp();
//DEVICES
$("#devices").slideUp();

$("#space").hover(function(){
	$("#space").addClass("buzz");
},function(){
	try{
		$("#space").removeClass("buzz");
	}
	catch(e){}
});
   