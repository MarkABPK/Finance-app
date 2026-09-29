function ThemeToggle({ theme, setTheme, toggleTheme }) {
  return (
    <div className="theme-switch">
      <button
        type="button"
        className={`theme-option ${theme === "light" ? "active" : ""}`}
        onClick={() => setTheme("light")}
      >
        Light
      </button>

      <button
        type="button"
        className={`theme-option ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}

export default ThemeToggle;
