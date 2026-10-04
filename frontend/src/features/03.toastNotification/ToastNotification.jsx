import React from "react";
import "./ToastNotification.css";

import MyToast from "./myToast/MyToast";
import ReactToastify from "./reactToastify/ReactToastify";
import ReactHotToast from "./reactHotToast/ReactHotToast";

export default function ToastNotification() {
  return (
    <div id="main">
      <MyToast />
      <ReactToastify />
      <ReactHotToast />
    </div>
  );
}
