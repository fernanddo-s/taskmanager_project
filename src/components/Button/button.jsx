import React from "react";
import "./button.css"

const Button = ({ children, onClick }) => {
  return (
    <button className="add_button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
