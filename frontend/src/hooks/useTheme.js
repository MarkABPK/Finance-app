import { useState } from "react";
import { useEffect } from "react";

function useTheme() {
  const saveTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(saveTheme);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

export default useTheme;
