import React from "react";
import "./task.css"

const Task = ({task}) => {
    return (
        <div className="task_container">
            {task.title}
        </div>
    );
}

export default Task;