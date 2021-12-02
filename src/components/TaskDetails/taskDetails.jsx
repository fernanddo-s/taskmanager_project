import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Button from "../Button/button"

import "./taskDetails.css"

const TaskDetails = () => {
    const params = useParams();

    const history = useHistory();

    const handleButtonBackClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back_button_container" onClick={handleButtonBackClick}>
                <Button>Voltar</Button>
            </div>
            <div className="task_details_container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perspiciatis aperiam, necessitatibus doloribus hic consequatur nostrum? Explicabo recusandae suscipit eum nostrum, laudantium magnam optio maxime. Eveniet earum vel dolor odit.</p>
            </div>
        </>
    );
}

export default TaskDetails;