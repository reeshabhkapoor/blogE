import React from "react";
import "./DefaultContainer.css";

const DefaultContainer = (props) => {
  return (
    <div className="container">
      <h3>{props.text}</h3>
    </div>
  );
};

export default DefaultContainer;
