import { Sun, Moon } from "lucide-react";

function ThemeToggle({ theme, setTheme }) {
  return (
    <div className="theme-switch">
      <button
        type="button"
        className={`theme-option ${theme === "light" ? "active" : ""}`}
        onClick={() => setTheme("light")}
      >
        <Sun className="icon" />
      </button>

      <button
        type="button"
        className={`theme-option ${theme === "dark" ? "active" : ""}`}
        onClick={() => setTheme("dark")}
      >
        <Moon className="icon" />
      </button>
    </div>
  );
}

export default ThemeToggle;
