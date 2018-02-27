var today = new Date();
var numDays = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
var messages = ["days until the end!", "days left in this prison!", "days left until we become adults!", "beautiful days left!", "torturous days left!", "YOLO days left!", "days before you get disowned!", "days until saying \"see ya suckas\"!"];
var n = numDays[today.getMonth()] + today.getDate();
var start = 243;
var end = 173;
var daysIn = n-start;
var daysLeft = end-n;
if(daysLeft > 0 && ((n > start && n < 366)|| (n < end && n >0))){
	document.getElementById("days").innerHTML = daysLeft;
	document.getElementById("message").innerHTML = messages[parseInt(Math.random() * messages.length)];
}
else{
	document.getElementById("days").innerHTML = "It's over!";
	document.getElementById("message").innerHTML = "See ya losers!";
}
