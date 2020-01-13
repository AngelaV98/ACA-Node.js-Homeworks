import React from "react";
import "./ErrorIndicator.css";
import error from "../../assets/error.png";
const ErrorIndicator = () => {
  return (
    <div className="ErrorIndicator">
      <h2 className="">Something went wrong!!!</h2>
      <img src={error} alt="Error" />
    </div>
  );
};

export default ErrorIndicator;