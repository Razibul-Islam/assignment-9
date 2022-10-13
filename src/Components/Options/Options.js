import React from "react";

const Options = ({ option }) => {
  console.log(option);
  return (
    <div>
      <p>
        <input type="radio" name="radio-1" className="radio" />
        <span>{option}</span>
      </p>
    </div>
  );
};

export default Options;
