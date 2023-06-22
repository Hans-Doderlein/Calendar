$(function () {
  const timeblock = $(".time-block");
  // saves events when button is clicked
  timeblock.on("click", ".saveBtn", (event) => {
    let textValue = $(event.target).siblings("textarea").val();

    let currentId = $(event.target).parent().attr("id");

    let currentClass = $(event.target).parent().attr("class");

    if (currentClass.includes("future")) {
      if (textValue && textValue.trim() !== "") {
        localStorage.setItem(currentId, textValue.trim());
        myAlert.showSaveAlert();
      } else {
        if (localStorage.getItem(currentId)) {
          localStorage.removeItem(currentId);
          myAlert.showRemovedAlert();
        } else {
          myAlert.showEmptyAlert();
        }
      }
    } else {
      myAlert.showPastAlert();
    }
  });
});
