import React, {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext({theme: "light", toggleTheme: () => {}});

const STORAGE_KEY = "mi-theme";

function readInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    const legacy = window.localStorage.getItem("isDark");
    if (legacy !== null) return legacy === "true" ? "dark" : "light";
  } catch {
    // Reading preferences may be blocked in private browsing.
  }
  return "light";
}

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    document.documentElement.style.background =
      theme === "dark" ? "#19231f" : "#faf9f6";
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* Theme still works without storage. */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta)
      meta.setAttribute("content", theme === "dark" ? "#19231f" : "#faf9f6");
  }, [theme]);

  const toggleTheme = () =>
    setTheme(prev => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider
      value={{theme, isDark: theme === "dark", toggleTheme}}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
