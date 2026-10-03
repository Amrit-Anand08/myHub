# Notes — Browser Tab Notification Count with `useEffect`

## Feature

Show the number of **incomplete TODO tasks** in the browser tab title.

Example:

- `Todo Manager` → when there are no incomplete tasks
- `(3) Todo Manager` → when 3 tasks are incomplete
- `(10) Todo Manager` → when 10 tasks are incomplete

---

## Code

```jsx
useEffect(() => {
  const temp = tasks.filter((task) => !task.isCompleted);

  const notification = temp.length;

  document.title =
    notification === 0
      ? "Todo Manager"
      : `(${notification}) Todo Manager`;
}, [tasks]);