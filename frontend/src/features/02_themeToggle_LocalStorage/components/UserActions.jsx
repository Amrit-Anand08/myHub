import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function UserActions() {
  let { theme, setTheme, themeToggle } = useContext(ThemeContext);
  return (
    <div className="user-actions">
      <div className="action-info">
        <div className="action-icon">🌙</div>

        <div>
          <h3>Appearance</h3>

          <p>Choose how your dashboard looks.</p>
        </div>
      </div>

      <button className={`theme-toggle ${theme}`} onClick={() => themeToggle()}>
        <span className="toggle-icon">{theme === "light" ? "🌙" : "☀️"}</span>
        <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </div>
  );
}
