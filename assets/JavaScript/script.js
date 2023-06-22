$(function () {
  var currentHour = dayjs().hour();
  var timeblock = $(".time-block");
  currentHour = 12;

  dayjs.extend(window.dayjs_plugin_advancedFormat);

  // displays current day
  $("#currentDay").text(dayjs().format("dddd, MMMM Do. h:mm a"));

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

  // saves events when button is clicked
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

  //  displays previously stored events
  function displayEvents() {
    $.each(timeblock, (index) => {
      const block = $(timeblock[index]);
      block.children("textarea").text(localStorage.getItem(block.attr("id")));
    });
  }

  displayEvents();

  let modeSwitcher = document.getElementById("themeButton");
  let theme;
  const themeLink = document.getElementById("themeLink");

  modeSwitcher.addEventListener("click", switchMode);

  function switchMode(event) {
    event.preventDefault();
    theme = !theme;
    if (theme) {
      themeLink.setAttribute("href", "./assets/CSS/Light-styles.css");
    } else {
      themeLink.setAttribute("href", "./assets/CSS/Dark-style.css");
    }
  }
});
