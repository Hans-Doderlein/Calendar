$(function () {
  dayjs.extend(window.dayjs_plugin_advancedFormat);

  // displays current day
  $("#currentDay").text(dayjs().format("dddd, MMMM Do. h:mm a"));
});
