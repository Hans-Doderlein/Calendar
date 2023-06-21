// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour = dayjs().hour();
var timeblock = $(".time-block");
currentHour = 12;
let events = localStorage.getItem("Events")
  ? JSON.parse(localStorage.getItem("Events"))
  : [];

// displays current day
$("#currentDay").text(dayjs().format("dddd, MMMM D"));

//adds class based on current time
$.each(timeblock, (index) => {
  if (timeblock[index].getAttribute("value") < currentHour) {
    timeblock[index].classList.add("past");
  } else if (timeblock[index].getAttribute("value") == currentHour) {
    timeblock[index].classList.add("present");
  } else {
    timeblock[index].classList.add("future");
  }
});

timeblock.on("click", ".saveBtn", (event) => {
  let textArea = $(event.target).siblings("textarea");
  let newEvent = textArea.val();
  console.log(newEvent);

  if (newEvent === " " || null || undefined) {
    new event = "";
    return;
  } else {
    events.push(newEvent);
    localStorage.setItem("Events", JSON.stringify(events));
    events = JSON.parse(localStorage.getItem("Events"));
  }
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});