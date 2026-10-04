# 🔔 Toast Notification: Custom Toast + Libraries

**Goal:** Build toast notifications three ways: a custom component from scratch, `react-toastify`, and `react-hot-toast`.

**One-line summary:** `useState` holds the toast → props pass it down → `useEffect` timers dismiss it → CSS animates it.

---

## 1. Folder Structure

```
03.toastNotification/
├── ToastNotification.jsx      → renders all three demos
├── ToastNotification.css
├── myToast/
│   ├── MyToast.jsx            → buttons + toast state
│   └── components/
│       ├── MyToastComp.jsx    → toast UI + timers
│       └── MyToastComp.css
├── reactToastify/
│   └── ReactToastify.jsx
└── reactHotToast/
    └── ReactHotToast.jsx
```

---

## 2. Custom Toast: Parent (State)

```jsx
const [toast, setToast] = useState(null);

function showToast(message, type = "info") {
  setToast({
    id: Date.now(),
    message,
    type,
    duration: 3000,
    position: "top-left",
  });
}

function closeToast() {
  setToast(null);
}
```

**Trigger it:**

```jsx
<button onClick={() => showToast("Data saved successfully!", "success")}>
  Success
</button>

<MyToastComp toast={toast} onClose={closeToast} />
```

> `toast = null` means no toast. `toast = {...}` means show it. One object holds everything the toast needs.

---

## 3. Custom Toast: Component

**Props:** `toast` (the data) and `onClose` (callback to clear it).

### Auto-dismiss with `useEffect`

```jsx
const [isClosing, setIsClosing] = useState(false);

useEffect(() => {
  if (!toast) return;

  setIsClosing(false);

  const closeTimer = setTimeout(() => {
    setIsClosing(true); // start exit animation
  }, toast.duration - 300);

  const removeTimer = setTimeout(() => {
    onClose(); // remove from DOM
  }, toast.duration);

  return () => {
    clearTimeout(closeTimer);
    clearTimeout(removeTimer);
  };
}, [toast, onClose]);

if (!toast) return null;
```

**Timeline (duration = 3000ms):**

```
0ms ──────────── 2700ms ───── 3000ms
 show             exit anim     removed
 (toastEnter)     (toastExit)   onClose()
```

> The cleanup function clears both timers. Without it, an old timer could close a **new** toast early.

### Manual close

```jsx
function handleClose() {
  setIsClosing(true);
  setTimeout(() => onClose(), 300); // wait for exit animation
}
```

### JSX structure

```jsx
<div className={`toastContainer ${toast.position}`}>
  <div
    className={`myToast ${toast.type} ${isClosing ? "toastExit" : "toastEnter"}`}
  >
    <div className="toastIcon">
      {toast.type === "success" && "✓"}
      {toast.type === "error" && "×"}
      {toast.type === "warning" && "!"}
      {toast.type === "info" && "i"}
    </div>

    <div className="toastContent">
      <h3>{/* title by type */}</h3>
      <p>{toast.message}</p>
    </div>

    <button className="toastClose" onClick={handleClose}>
      ×
    </button>

    <div className="toastProgress">
      <div
        className="toastProgressBar"
        style={{ animationDuration: `${toast.duration}ms` }}
      />
    </div>
  </div>
</div>
```

> The class names `success`, `error`, `warning`, `info` come straight from `toast.type`, so CSS styles each type with no extra logic.

---

## 4. Custom Toast: Key Ideas

| Idea                 | How it works                                             |
| -------------------- | -------------------------------------------------------- |
| Single state object  | `{ id, message, type, duration, position }`              |
| Conditional render   | `if (!toast) return null`                                |
| Dynamic classes      | `` `myToast ${toast.type}` ``                            |
| Enter/exit animation | Toggle `toastEnter` / `toastExit` with `isClosing`       |
| Progress bar         | CSS animation, duration set inline from `toast.duration` |
| Cleanup              | `clearTimeout` in the `useEffect` return                 |

---

## 5. react-toastify

**Install:**

```bash
npm install react-toastify
```

**Use:**

```jsx
import { ToastContainer, toast } from "react-toastify";

toast.success("success Message");
toast.error("error Message");
toast.warn("warn Message");
toast.info("info Message");
```

**Mount the container once:**

```jsx
<ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>
```

> Don't forget the library's CSS if your version needs it: `import "react-toastify/dist/ReactToastify.css";`

---

## 6. react-hot-toast

**Install:**

```bash
npm install react-hot-toast
```

**Use:**

```jsx
import toast, { Toaster } from "react-hot-toast";

toast.success("success Message");
toast.error("error Message");
toast.loading("loading Message");

toast.custom(
  <div style={{ padding: "20px", background: "hotpink", borderRadius: "10px" }}>
    <h1>Custom Message</h1>
  </div>,
);
```

**Mount the toaster once:**

```jsx
<Toaster position="top-right" />
```

> `toast.custom()` lets you render any JSX as a toast.

---

## 7. Comparison

| Feature                 | MyToast          | react-toastify           | react-hot-toast     |
| ----------------------- | ---------------- | ------------------------ | ------------------- |
| Setup                   | Manual           | Install + container      | Install + toaster   |
| Multiple toasts at once | ❌ One at a time | ✅ Stacked               | ✅ Stacked          |
| Progress bar            | ✅ Custom        | ✅ Built in              | ❌                  |
| Loading toast           | ❌               | ✅ (via `toast.loading`) | ✅ Built in         |
| Custom JSX              | ✅ Full control  | ✅                       | ✅ `toast.custom()` |
| Learning value          | ⭐ High          | Medium                   | Medium              |

> **When to use what:** build your own to learn how it works, use a library in real projects.

---

## 8. Common Mistakes

- Forgetting `clearTimeout` in cleanup, so timers fire on stale toasts.
- Mounting `<ToastContainer />` or `<Toaster />` more than once, which gives duplicate toasts.
- Calling `onClose()` instantly on manual close, which skips the exit animation.
- Passing an unstable `onClose` function (new each render) in the `useEffect` dependency array, which can restart the timers. Wrap it in `useCallback` if the parent re-renders often.

---

## 🔑 Quick Reference

| Tool                          | Role                                        |
| ----------------------------- | ------------------------------------------- |
| `useState`                    | Stores the current toast                    |
| Props                         | Pass `toast` and `onClose` to the component |
| `useEffect`                   | Runs the auto-dismiss timers                |
| `setTimeout` / `clearTimeout` | Schedule and cancel dismissal               |
| CSS animations                | Enter, exit, and progress bar               |
| `react-toastify`              | Ready-made, feature-rich toasts             |
| `react-hot-toast`             | Ready-made, lightweight toasts              |
