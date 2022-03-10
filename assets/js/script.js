// get current date and display it on screen

var currentDate = document.querySelector("#current-day");
var currentTime = moment();

currentDate.textContent = currentTime.format("MMMM DD, YYYY - hh:mm:ss a");

// make the page refresh every 5 minutes so the user keeps track of tasks with the time of day
var pageAuditTimer = function(everyFive) {
    setTimeout("location.reload(true);", everyFive);
};
window.onload = pageAuditTimer(300000);


// Make the information put into form fields persist


var nineAm = document.getElementById("nineAm");
var tenAm = document.getElementById("tenAm");
var elevenAm = document.getElementById("elevenAm");
var twelvePm = document.getElementById("twelvePm");
var onePm = document.getElementById("onePm");
var twoPm = document.getElementById("twoPm");
var threePm = document.getElementById("threePm");
var fourPm = document.getElementById("fourPm");
var fivePm = document.getElementById("fivePm");

saveBtn9.onclick = function() {
  var nineHour = nineAm.value;
  localStorage.setItem("nineHourText", nineHour);
}

saveBtn10.onclick = function() {
  var tenHour = tenAm.value;
  localStorage.setItem("tenHourText", tenHour);
}

saveBtn11.onclick = function() {
  var elevenHour = elevenAm.value;
  localStorage.setItem("elevenHourText", elevenHour);
}

saveBtn12.onclick = function() {
  var twelveHour = twelvePm.value;
  localStorage.setItem("twelveHourText", twelveHour);
}

saveBtn12.onclick = function() {
  var twelveHour = twelvePm.value;
  localStorage.setItem("twelveHourText", twelveHour);
}

saveBtn13.onclick = function() {
  var thirteenHour = onePm.value;
  localStorage.setItem("thirteenHourText", thirteenHour);
}

saveBtn14.onclick = function() {
  var fourteenHour = twoPm.value;
  localStorage.setItem("fourteenHourText", fourteenHour);
}