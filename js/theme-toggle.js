(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.querySelector(".js-toggle-theme");
    const themeIcon = toggleThemeButton.querySelector("i");
    function updateIcon(theme) {
      themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
    function setTheme(theme) {
      if (theme === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        updateIcon("dark");
      } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
        updateIcon("light");
      }
    }
    function toggleTheme() {
      const currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }
    toggleThemeButton.addEventListener("click", function(event) {
      event.preventDefault();
      toggleTheme();
    });
    const preferredTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(preferredTheme);
  });
})();
