import React, { useEffect, useState } from "react";
import "../ToastNotification.css";
import MyToastComp from "../myToast/components/MyToastComp";

export default function MyToast() {
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

  return (
    <div className="container">
      <h1>Using MyToast</h1> <br />
      <br />
      <br />
      <button onClick={() => showToast("Data saved successfully!", "success")}>
        Success
      </button>
      <button onClick={() => showToast("Something went wrong!", "error")}>
        Error
      </button>
      <button onClick={() => showToast("Please check your input.", "warning")}>
        Warning
      </button>
      <button onClick={() => showToast("New update is available.", "info")}>
        Info
      </button>
      <MyToastComp toast={toast} onClose={closeToast} />
    </div>
  );
}
