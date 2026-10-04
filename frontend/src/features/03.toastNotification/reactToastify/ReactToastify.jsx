import React from "react";
import "../ToastNotification.css";
import { ToastContainer, toast } from "react-toastify";

export default function ReactToastify() {
  let makeToast = (type) => {
    if (type === "success") {
      toast.success("success Message ");
    } else if (type === "error") {
      toast.error("error Message ");
    } else if (type === "warn") {
      toast.warn("warn Message ");
    } else if (type === "info") {
      toast.info("info Message ");
    }
  };

  return (
    <div className="container">
      <h1>using React Toastify</h1> <br />
      <br />
      <br />
      <button onClick={() => makeToast("success")}>success</button>
      <button onClick={() => makeToast("error")}>error</button>
      <button onClick={() => makeToast("warn")}>warn</button>
      <button onClick={() => makeToast("info")}>info</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
