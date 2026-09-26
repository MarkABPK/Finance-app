function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    </button>
  );
}

export default ThemeToggle;
