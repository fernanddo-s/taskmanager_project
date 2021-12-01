import React from "react";
import Task from "../Task/task";

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (<Task task={task} />))}
        </>
    );
}

export default Tasks;