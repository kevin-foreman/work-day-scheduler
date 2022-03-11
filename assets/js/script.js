$(document).ready(function() {

    // get current date and display it on screen
  var currentDate = document.querySelector("#current-day");
  var currentTime = moment();
  currentDate.textContent = currentTime.format("MMMM DD, YYYY - hh:mm:ss a");
  

  // make the page refresh every 5 minutes so the user keeps track of tasks with the time of day
  var pageAuditTimer = function(everyFive) {
      setTimeout("location.reload(true);", everyFive);
  };
  window.onload = pageAuditTimer(300000);

  // save button puts information in local storage
  $(".saveBtn").on("click", function() {
    var description=$(this).siblings(".description").val()
    var time=$(this).parent().attr("id")
    localStorage.setItem(time, description)
    console.log(description, time)
  })

  // get information from local storage and post to page after reload
  $("#9 .description").val(localStorage.getItem("9"))
  $("#10 .description").val(localStorage.getItem("10"))
  $("#11 .description").val(localStorage.getItem("11"))
  $("#12 .description").val(localStorage.getItem("12"))
  $("#13 .description").val(localStorage.getItem("13"))
  $("#14 .description").val(localStorage.getItem("14"))
  $("#15 .description").val(localStorage.getItem("15"))
  $("#16 .description").val(localStorage.getItem("16"))
  $("#17 .description").val(localStorage.getItem("17"))

// update the task fields with colors to correspond with the classes
function upDater() {
  var currentHour = moment().hours
  $(".time-block").each(function() {
    var timeBlock = parseInt ($(this).attr("id"))
    if (timeBlock < currentHour) {
      $(this).addClass("past")
    } else if (timeBlock === currentHour) {
      $(this).addClass("present")
    } else if (timeBlock > currentHour) {
      $(this).addClass("future")
    }

    }) 
  }upDater()
})








// Old code


// var nineAm = document.getElementById("nineAm");
// var tenAm = document.getElementById("tenAm");
// var elevenAm = document.getElementById("elevenAm");
// var twelvePm = document.getElementById("twelvePm");
// var onePm = document.getElementById("onePm");
// var twoPm = document.getElementById("twoPm");
// var threePm = document.getElementById("threePm");
// var fourPm = document.getElementById("fourPm");
// var fivePm = document.getElementById("fivePm");

// saveBtn9.onclick = function() {
//   var nineHour = nineAm.value;
//   localStorage.setItem("nineHourText", nineHour);
// };

// saveBtn10.onclick = function() {
//   var tenHour = tenAm.value;
//   localStorage.setItem("tenHourText", tenHour);
// };

// saveBtn11.onclick = function() {
//   var elevenHour = elevenAm.value;
//   localStorage.setItem("elevenHourText", elevenHour);
// };

// saveBtn12.onclick = function() {
//   var twelveHour = twelvePm.value;
//   localStorage.setItem("twelveHourText", twelveHour);
// };

// saveBtn12.onclick = function() {
//   var twelveHour = twelvePm.value;
//   localStorage.setItem("twelveHourText", twelveHour);
// };

// saveBtn13.onclick = function() {
//   var thirteenHour = onePm.value;
//   localStorage.setItem("thirteenHourText", thirteenHour);
// };

// saveBtn14.onclick = function() {
//   var fourteenHour = twoPm.value;
//   localStorage.setItem("fourteenHourText", fourteenHour);
// };

// saveBtn15.onclick = function() {
//   var fifteenHour = threePm.value;
//   localStorage.setItem("fifteenHourText", fifteenHour);
// };

// saveBtn16.onclick = function() {
//   var sixteenHour = fourPm.value;
//   localStorage.setItem("sixteenHourText", sixteenHour);
// };

// saveBtn17.onclick = function() {
//   var seventeenHour = fivePm.value;
//   localStorage.setItem("seventeenHourText", seventeenHour);
// };

// // allow the data to persist after page refresh

// var loadTasks = function () {
//   localStorage.getItem("seventeenHourText");
//   console.log(loadTasks)
// }
// window.onload = loadTasks

