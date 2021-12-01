import React, { useState } from "react";

import "./App.css"
import AddTask from "./components/AddTask/addTask";
import Tasks from "./components/Tasks/tasks";

const App = () => {
  let [tasks, setTask] = useState([
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
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
}

export default App;