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
  var currentHour = moment().hours();
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