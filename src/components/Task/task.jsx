import React from "react";
import "./task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  return (
    <div
      className="task_container"
      style={task.completed ? { borderLeft: "6px solid chartreuse " } : {}}
    >
      <div className="task_title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="buttons_container">
        <button className="remove_task_button" onClick={() => handleTaskDeletion(task.id)}>X</button>
      </div>
    </div>
  );
};

export default Task;
