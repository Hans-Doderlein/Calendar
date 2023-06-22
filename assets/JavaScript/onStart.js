$(function () {
  const timeblock = $(".time-block");
  var currentHour = dayjs().hour();

  $.each(timeblock, (index) => {
    const currentTimeblock = $(timeblock[index]);
    const currentBlock = Number(timeblock[index].getAttribute("value"));

    currentTimeblock
      .children("textarea")
      .text(localStorage.getItem(currentTimeblock.attr("id")));

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
