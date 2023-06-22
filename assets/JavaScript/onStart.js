$(function () {
  // targets timeblock and retrieves date and time from dayjs
  const timeblock = $(".time-block");
  var currentHour = dayjs().hour();

  // runs through each timeblock
  $.each(timeblock, (index) => {
    // retrieves time-value form timeblock of current index
    const currentTimeblock = $(timeblock[index]);
    const currentBlock = Number(timeblock[index].getAttribute("value"));

    // loads previously stored events on initialization
    currentTimeblock
      .children("textarea")
      .text(localStorage.getItem(currentTimeblock.attr("id")));

    // adds classes based on current time
    if (currentBlock < currentHour) {
      currentTimeblock.addClass("past");
    } else if (currentBlock == currentHour) {
      currentTimeblock.addClass("present");
    } else {
      currentTimeblock.addClass("future");
      currentTimeblock.children("button").addClass("future");
    }
  });
});
