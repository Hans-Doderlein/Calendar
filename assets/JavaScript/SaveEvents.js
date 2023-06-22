$(function () {
  // Targets timeblocks
  const timeblock = $(".time-block");

  timeblock.on("click", ".saveBtn", (event) => {
    // targets classes, ids, and textareas
    let textValue = $(event.target).siblings("textarea").val();

    let currentId = $(event.target).parent().attr("id");

    let currentClass = $(event.target).parent().attr("class");

    // checks if timeblock class includes future
    if (currentClass.includes("future")) {
      // checks if there is text in the text area
      if (textValue && textValue.trim() !== "") {
        // saves event to local storage and dsiplays a success alert
        localStorage.setItem(currentId, textValue.trim());
        myAlert.showSaveAlert();
      } else {
        // checks if anything is stored already for that time block
        if (localStorage.getItem(currentId)) {
          // removes deleted event from local storage and displays removed alert
          localStorage.removeItem(currentId);
          myAlert.showRemovedAlert();
        } else {
          // displays empty text area alert
          myAlert.showEmptyAlert();
        }
      }
    } else {
      // displays past ir present timeblock alert
      myAlert.showPastAlert();
    }
  });
});
