$(function () {
  var currentHour = dayjs().hour();
  var timeblock = $(".time-block");
  currentHour = 12;

  dayjs.extend(window.dayjs_plugin_advancedFormat);

  // displays current day
  $("#currentDay").text(dayjs().format("dddd, MMMM Do"));

  //adds class based on current time
  $.each(timeblock, (index) => {
    let currentBlock = Number(timeblock[index].getAttribute("value"));

    if (currentBlock < currentHour) {
      $(timeblock[index]).addClass("past");
    } else if (currentBlock == currentHour) {
      $(timeblock[index]).addClass("present");
    } else {
      $(timeblock[index]).addClass("future");
      $(timeblock[index]).children("button").addClass("future");
    }
  });

  timeblock.on("click", ".saveBtn", (event) => {
    let textValue = $(event.target).siblings("textarea").val();

    let currentId = $(event.target).parent().attr("id");

    let currentClass = $(event.target).parent().attr("class");

    if (currentClass.includes("future")) {
      if (textValue && textValue.trim() !== "") {
        localStorage.setItem(currentId, textValue.trim());
      } else {
        console.log("Textarea cannot be empty.");
      }
    } else {
      console.log("Can't add events in the past");
    }
  });

  function displayEvents() {
    $.each(timeblock, (index) => {
      const block = $(timeblock[index]);
      block.children("textarea").text(localStorage.getItem(block.attr("id")));
    });
  }

  displayEvents();
});
