import { useState } from "react";
function useTheme() {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }
  return { theme, toggleTheme };
}

export default useTheme;
