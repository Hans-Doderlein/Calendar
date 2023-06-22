const myAlert = (function () {
  const emptyAlert = $("#empty");
  const pastAlert = $("#past");
  const saveAlert = $("#saved");
  const removeAlert = $("#removed");

  function hideAlert(alert) {
    setTimeout(() => {
      alert.attr("style", "visibility: hidden;");
    }, 2500);
  }

  function showAlert(alert) {
    alert.attr("style", "visibility: visible;");
  }

  function handleAlert(alert) {
    showAlert(alert);
    hideAlert(alert);
  }

  function showEmptyAlert() {
    handleAlert(emptyAlert);
  }

  function showPastAlert() {
    handleAlert(pastAlert);
  }

  function showSaveAlert() {
    handleAlert(saveAlert);
  }

  function showRemovedAlert() {
    handleAlert(removeAlert);
  }

  return {
    showEmptyAlert,
    showPastAlert,
    showSaveAlert,
    showRemovedAlert,
  };
})();
