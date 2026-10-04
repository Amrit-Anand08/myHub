import React, { useEffect, useState } from "react";
import "./MyToastComp.css";

export default function MyToastComp({ toast, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!toast) {
      return;
    }

    setIsClosing(false);

    const closeTimer = setTimeout(() => {
      setIsClosing(true);
    }, toast.duration - 300);

    const removeTimer = setTimeout(() => {
      onClose();
    }, toast.duration);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(removeTimer);
    };
  }, [toast, onClose]);

  if (!toast) {
    return null;
  }

  function handleClose() {
    setIsClosing(true);

    setTimeout(() => {
      onClose();
    }, 300);
  }

  return (
    <div className={`toastContainer ${toast.position}`}>
      <div
        className={`myToast ${toast.type} ${
          isClosing ? "toastExit" : "toastEnter"
        }`}
      >
        {/* Icon */}
        <div className="toastIcon">
          {toast.type === "success" && "✓"}
          {toast.type === "error" && "×"}
          {toast.type === "warning" && "!"}
          {toast.type === "info" && "i"}
        </div>

        {/* Content */}
        <div className="toastContent">
          <h3>
            {toast.type === "success" && "Success"}
            {toast.type === "error" && "Error"}
            {toast.type === "warning" && "Warning"}
            {toast.type === "info" && "Information"}
          </h3>

          <p>{toast.message}</p>
        </div>

        {/* Close */}
        <button className="toastClose" onClick={handleClose}>
          ×
        </button>

        {/* Progress */}
        <div className="toastProgress">
          <div
            className="toastProgressBar"
            style={{
              animationDuration: `${toast.duration}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
