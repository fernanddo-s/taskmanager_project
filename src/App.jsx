import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AddTask from "./components/AddTask/addTask";
import Header from "./components/Header/header";
import Tasks from "./components/Tasks/tasks";
import TaskDetails from "./components/TaskDetails/taskDetails";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false,
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true,
    },
    {
      id: 3,
      title: "Responder o e-mail do José",
      completed: true,
    },
    {
      id: 4,
      title: "Comprar cebola",
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTask(newTasks);
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTask(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact component={TaskDetails} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
