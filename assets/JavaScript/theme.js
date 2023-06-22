$(function () {
  let modeSwitcher = $("#themeButton");
  let theme;
  const themeLink = $("#themeLink");

  modeSwitcher.on("click", switchMode);

  function switchMode(event) {
    event.preventDefault();

    theme = !theme;

    if (theme) {
      themeLink.attr("href", "./assets/CSS/Light-styles.css");
    } else {
      themeLink.attr("href", "./assets/CSS/Dark-style.css");
    }
  }
});
