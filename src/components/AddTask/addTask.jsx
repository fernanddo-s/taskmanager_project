import React from "react";
import Button from "../Button/button";
import "./addTask.css";

const AddTask = () => {
  return (
    <div className="add_task_container">
      <input type="text" className="add_task_input" />
      <div className="add_task_button_container">
        <Button>Adiconar tarefa</Button>
      </div>
    </div>
  );
};

export default AddTask;
