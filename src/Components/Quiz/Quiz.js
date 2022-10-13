import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Options from "../Options/Options";

const Quiz = ({ questions }) => {
  // console.log(questions);
  const { question, correctAnswer, id, options } = questions;
  return (
    <div>
      <div className="w-3/5 border-2 border-red-600 mx-auto p-5">
        <div className="flex justify-between items-center mb-3">
          <p>question: {question}</p>
          <FontAwesomeIcon icon={faEye} />
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-2">
          {options.map((option) => (
            <Options option={option}></Options>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
