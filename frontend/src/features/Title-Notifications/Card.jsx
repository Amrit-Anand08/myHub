import React from "react";
import "./TitleNotification.css";

export default function Card(props) {
  const { _id, name, isCompleted } = props.data;
  const { fetchTask } = props;

  async function taskCompleteHandler() {
    const res = await fetch(
      `http://localhost:3000/api/title-notification/${_id}`,
      {
        method: "PUT",
      },
    );
    fetchTask();
  }

  return (
    <>
      {isCompleted ? (
        <div id="task">
          <h2 style={{ textDecoration: "line-through", color: "gray" }}>
            {name}
          </h2>
        </div>
      ) : (
        <div id="task">
          <h2>{name}</h2>
          <button
            style={{
              margin: "5px 0px",
              padding: "8px 20px",
              borderRadius: "5px",
              background: "#12B45B",
              color: "white",
            }}
            onClick={taskCompleteHandler}
          >
            Mark as Completed
          </button>
        </div>
      )}
    </>
  );
}
