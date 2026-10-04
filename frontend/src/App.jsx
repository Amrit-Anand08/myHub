import React from "react";
import TitleNotification from "./features/01_Title-Notifications/TitleNotification";
import ThemeToggleLocalStorage from "./features/02_themeToggle_LocalStorage/ThemeToggleLocalStorage";
import ToastNotification from "./features/03.toastNotification/ToastNotification";

export default function App() {
  return (
    <>
      {/* <TitleNotification /> */}
      {/* <ThemeToggleLocalStorage /> */}
      <ToastNotification />
    </>
  );
}
