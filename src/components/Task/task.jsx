import React from "react";
import "./task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom"

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useHistory();

    const handleTaskDetsilsClick = () => {
        history.push(`${task.title}`)
    }

    return (
        <div
            className="task_container"
            style={task.completed ? { borderLeft: "6px solid chartreuse " } : {}}
        >
            <div className="task_title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons_container">
                <button className="see_task_details_button" onClick={handleTaskDetsilsClick} >
                    <CgInfo />
                </button>
                <button
                    className="remove_task_button"
                    onClick={() => handleTaskDeletion(task.id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    );
};

export default Task;
