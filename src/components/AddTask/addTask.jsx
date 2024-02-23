import React, { useState } from "react";
import Button from "../Button/button";
import "./addTask.css";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    if ((inputData === null) || (inputData === "")) {
      alert("Não é possível adicionar uma tarefa vazia!");
    } else {
      handleTaskAddition(inputData);
    }
  };

  return (
    <div className="add_task_container">
      <input
        onChange={handleInputChange}
        values={inputData}
        type="text"
        className="add_task_input"
      />
      <div className="add_task_button_container">
        <Button onClick={handleAddTaskClick}>Adiconar</Button>
      </div>
    </div>
  );
};

export default AddTask;
