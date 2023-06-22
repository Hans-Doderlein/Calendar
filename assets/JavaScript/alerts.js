const myAlert = (function () {
  // Target alerts in html
  const emptyAlert = $("#empty");
  const pastAlert = $("#past");
  const saveAlert = $("#saved");
  const removeAlert = $("#removed");

  // hides alerts after 2.5sec delay
  function hideAlert(alert) {
    setTimeout(() => {
      alert.attr("style", "visibility: hidden;");
    }, 2500);
  }

  // shows alert when needed
  function showAlert(alert) {
    alert.attr("style", "visibility: visible;");
  }

  // handles the showing and hiding of alerts
  function handleAlert(alert) {
    showAlert(alert);
    hideAlert(alert);
  }

  // displays text area empty alert
  function showEmptyAlert() {
    handleAlert(emptyAlert);
  }

  // displays past timeblock alert
  function showPastAlert() {
    handleAlert(pastAlert);
  }

  // displays save confirmation alert
  function showSaveAlert() {
    handleAlert(saveAlert);
  }

  // displays removed event alert
  function showRemovedAlert() {
    handleAlert(removeAlert);
  }

  // returns required alert functions
  // exposes alert api
  return {
    showEmptyAlert,
    showPastAlert,
    showSaveAlert,
    showRemovedAlert,
  };
})();
