import React from "react";
import "../ToastNotification.css";
import toast, { Toaster } from "react-hot-toast";

export default function ReactHotToast() {
  let makeToast = (type) => {
    if (type === "success") {
      toast.success("success Message ");
    } else if (type === "error") {
      toast.error("error Message ");
    } else if (type === "loading") {
      toast.loading("loading Message ");
    } else if (type === "custom") {
      toast.custom(
        <div
          style={{
            padding: "20px 20px",
            background: "hotpink",
            borderRadius: "10px",
          }}
        >
          <h1>Custom Message</h1>
        </div>,
      );
    }
  };

  return (
    <div className="container">
      <h1>using ReactHotToast</h1> <br />
      <br />
      <br />
      <button onClick={() => makeToast("success")}>success</button>
      <button onClick={() => makeToast("error")}>error</button>
      <button onClick={() => makeToast("loading")}>loading</button>
      <button onClick={() => makeToast("custom")}>Custom</button>
      <Toaster position="top-right"/>
    </div>
  );
}
