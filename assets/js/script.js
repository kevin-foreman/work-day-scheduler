// get current date and display it on screen

var currentDate = document.querySelector("#current-day");
var currentTime = moment();

currentDate.textContent = currentTime.format("MMMM DD, YYYY - hh:mm:ss a");

// make the page refresh every 5 minutes so the user keeps track of tasks with the time of day
var pageAuditTimer = function(everyFive) {
    setTimeout("location.reload(true);",everyFive);
};
window.onload = pageAuditTimer(300000);

// make tasks array
var tasks = {
    nineAm: [],
    tenAm: [],
    elevenAm: [],
    twelvePm: [],
    onePm: [],
    twoPm: [],
    threePm: [],
    fourPm: [],
    fivePm: []
};
console.log(tasks);




// Make the information put into form fields persist
var saveTasks = function() {
document.getElementById("saveBtn").addEventListener("click", function() {
    var nineAm = document.getElementById("#nineAm").textContent;
    localStorage.setItem("nineAm", JSON.stringify(tasks));

})
};

// Get the information from local storage, and put it back on the page after refresh
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in local storage, create a new object to track all task status arrays

    if (!tasks) {
        tasks = {
          nineAm: [],
          tenAm: [],
          elevenAm: [],
          twelvePm: [],
          onePm: [],
          twoPm: [],
          threePm: [],
          fourPm: [],
          fivePm: []
        };
      }
    };