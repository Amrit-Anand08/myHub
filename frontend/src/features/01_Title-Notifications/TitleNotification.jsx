import React, { useEffect, useState } from "react";
import "./TitleNotification.css";
import Card from "./Card";

export default function TitleNotification() {
  let [tasks, setTasks] = useState([]);
  let [input, setInput] = useState("");

  async function fetchTask() {
    let res = await fetch("http://localhost:3000/api/title-notification");
    let data = await res.json();
    let arr = data.tasks;
    setTasks(arr);
  }

  async function addTaskHandler(task) {
    const res = await fetch(`http://localhost:3000/api/title-notification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: task,
      }),
    });
    fetchTask();
  }

  useEffect(() => {
    fetchTask();
  }, []);

  //=========== Notification Work ====================

  useEffect(() => {
    const temp = tasks.filter((task) => !task.isCompleted);
    const notification = temp.length;
    document.title =
      notification === 0 ? "Todo Manager" : `(${notification}) Todo Manager`;
  }, [tasks]);

  //=========== Notification Work ====================

  return (
    <>
      <div id="bg">
        <div id="container">
          <section id="heading">
            <h1 style={{ marginLeft: "2%" }}>TODO</h1>
          </section>
          <section id="input">
            <input
              id="inp"
              type="text"
              value={input}
              placeholder="Enter your Task"
              style={{
                marginLeft: "2%",
                paddingLeft: "5px",
                width: "85%",
                height: "70%",
                border: "2px solid gray",
                borderRadius: "5px",
                fontSize: "20px",
              }}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              style={{
                width: "10%",
                height: "70%",
                borderRadius: "5px",
                background: "#186DFC",
                color: "white",
              }}
              onClick={() => {
                addTaskHandler(input);
                setInput("");
              }}
            >
              Add Task
            </button>
          </section>
          <section id="task-container">
            {tasks.map((elem) => {
              return <Card key={elem._id} data={elem} fetchTask={fetchTask} />;
            })}
          </section>
        </div>
      </div>
    </>
  );
}
