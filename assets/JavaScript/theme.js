$(function () {
  // targets theme button and link
  let modeSwitcher = $("#themeButton");
  let theme;
  const themeLink = $("#themeLink");

  // activates functions when button is clicked
  modeSwitcher.on("click", switchMode);

  function switchMode(event) {
    event.preventDefault();

    // changes theme boolean on every activation
    theme = !theme;

    // checks boolean of theme
    if (theme) {
      // if theme boolean is true, apply light style css
      themeLink.attr("href", "./assets/CSS/Light-styles.css");
    } else {
      // if theme value is false, apply dark style css
      themeLink.attr("href", "./assets/CSS/Dark-style.css");
    }
  }
});
