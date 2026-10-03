import { useState } from "react";
import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./context/ThemeContext";
import "./ThemeToggleLocalStorage.css";

export default function ThemeToggleLocalStorage() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  // console.log(savedTheme);

  const [theme, setTheme] = useState(savedTheme);
  const themeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeToggle }}>
      <div className={`theme-feature ${theme}`}>
        <Dashboard />
      </div>
    </ThemeContext.Provider>
  );
}
