// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// TODO 1: Get the current date and display it at the top of the calendar
const currentDate = moment().format("dddd, MMMM Do YYYY");
const dateDisplay = document.getElementById("currentDay");
dateDisplay.textContent = currentDate;

// TODO 2: Create time blocks for standard business hours of 9am to 5pm
const timeBlocks = Array.from({length: 9}, (_, i) => i + 9);
const planner = document.getElementById("planner");

// TODO 3: Color-code each time block based on whether it is in the past, present, or future
const currentHour = moment().hour();
timeBlocks.forEach(hour => {
  const timeBlock = document.createElement("div");
  timeBlock.classList.add("time-block");
  if (hour < currentHour) {
    timeBlock.classList.add("past");
  } else if (hour === currentHour) {
    timeBlock.classList.add("present");
  } else {
    timeBlock.classList.add("future");
  }
  const hourDisplay = document.createElement("div");
  hourDisplay.classList.add("hour");
  hourDisplay.textContent = moment(hour, "H").format("hA");
  const description = document.createElement("textarea");
  description.classList.add("description");
  const saveButton = document.createElement("button");
  saveButton.classList.add("saveBtn");
  saveButton.textContent = "Save";
  timeBlock.appendChild(hourDisplay);
  timeBlock.appendChild(description);
  timeBlock.appendChild(saveButton);
  planner.appendChild(timeBlock);
});



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
