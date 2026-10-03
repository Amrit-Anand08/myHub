# 🌙 Theme Toggle: Context API + localStorage

**Goal:** Build a Light/Dark theme system using `useState`, Context API, `useContext`, CSS Variables, and `localStorage`.

**One-line summary:** `useState` manages → Context shares → CSS displays → `localStorage` remembers.

---

## 1. Theme State and Toggle

```jsx
const [theme, setTheme] = useState("light");

const themeToggle = () => {
  const newTheme = theme === "light" ? "dark" : "light";

  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};
```

> Calculate `newTheme` first because React state updates are asynchronous. If you saved `theme` right after `setTheme`, you'd still get the old value.

---

## 2. Create Context

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

## 3. Provide Context

```jsx
<ThemeContext.Provider value={{ theme, themeToggle }}>
  <Dashboard />
</ThemeContext.Provider>
```

> Context lets deeply nested components access shared data without prop drilling.

---

## 4. Consume Context

```jsx
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const { theme, themeToggle } = useContext(ThemeContext);
```

**Example:**

```jsx
<button onClick={themeToggle}>
  {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
</button>
```

---

## 5. Apply Theme

```jsx
<div className={`theme-feature ${theme}`}>
  <Dashboard />
</div>
```

**Result:**

```html
<div class="theme-feature light">
<!-- or -->
<div class="theme-feature dark">
```

---

## 6. CSS Variables

**Define the variables per theme:**

```css
.theme-feature.light {
  --bg: #f5f7fb;
  --surface: #ffffff;
  --text: #171a21;
  --border: #e5e7eb;
}

.theme-feature.dark {
  --bg: #111827;
  --surface: #1f2937;
  --text: #f9fafb;
  --border: #374151;
}
```

**Use them everywhere:**

```css
.dashboard {
  background: var(--bg);
  color: var(--text);
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
}
```

---

## 7. localStorage Basics

| Action | Code |
|--------|------|
| Save | `localStorage.setItem("theme", "dark");` |
| Read | `localStorage.getItem("theme");` |
| Remove | `localStorage.removeItem("theme");` |

---

## 8. Restore Theme After Refresh

```jsx
const savedTheme = localStorage.getItem("theme") || "light";

const [theme, setTheme] = useState(savedTheme);
```

**Flow:**

```
Page loads
   ↓
getItem("theme")
   ↓
Saved theme?
   ├─ YES → use saved theme
   └─ NO  → use "light"
```

> **Tip:** Pass a function to `useState` so `localStorage` is read only once, not on every render:
> ```jsx
> const [theme, setTheme] = useState(
>   () => localStorage.getItem("theme") || "light"
> );
> ```

---

## 🔑 Quick Reference

| Tool | Role |
|------|------|
| `useState` | Stores the theme |
| Context API | Shares the theme |
| `useContext` | Accesses the theme |
| CSS Variables | Change the UI colors |
| `localStorage` | Persists the theme |
| `themeToggle()` | Switches the theme |