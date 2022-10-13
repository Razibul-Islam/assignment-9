import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Options from "../Options/Options";
import toast, { Toaster } from "react-hot-toast";

const Quiz = ({ questions }) => {
  // console.log(questions);
  const { question, correctAnswer, id, options } = questions;
  // toast.success("Successfully toasted!");
  const notify = () =>
    toast.success(`Ans. = ${correctAnswer}`, {
      duration: 2000,
      position: "top-center",

      // Styling
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      className: "",

      // Custom Icon
      icon: "👀",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <div>
      <div className="w-3/5 border-2 border-red-600 mx-auto my-5 p-5">
        <div className="flex justify-between lg:items-center items-start mb-3">
          <p>question: {question}</p>

          <button onClick={notify}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <Toaster />
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-2">
          {options.map((option) => (
            <Options option={option} correctAnswer={correctAnswer}></Options>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Quiz;
