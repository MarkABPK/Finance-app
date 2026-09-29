import { useState } from "react";
import { useEffect } from "react";

function useTheme() {
  const saveTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(saveTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }
  return { theme, setTheme, toggleTheme };
}

export default useTheme;
