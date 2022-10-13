import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Options = ({ option, correctAnswer }) => {
  // console.log(correctAnswer);

  const check = (e) => {
    // console.log(e);
    if (e === correctAnswer) {
      // console.log('True');
      toast("✔️ Correct Answer");
      // alert("☑️ Correct Answer");
    } else {
      //   console.log("false");
      toast("❌ Wrong Answer");
      // alert("❌ Wrong Answer");
    }
  };

  return (
    <div>
      {/* <button className="m-2 p-2 bg-black text-white" onClick={()=> check(option)}>
          {option}
        </button> */}

      <label
        className="ml-4 p-3 block text-xs md:text-base w-full cursor-pointer flex items-center"
        htmlFor={option}
      >
        <input
          onClick={(e) => check(e.target.value)}
          type="radio"
          name="option"
          className="radio checked:bg-blue-500 mr-2"
          value={option}
          id={option}
        />
        <span>{option}</span>
      </label>
      <ToastContainer position="top-left" autoClose={3000} theme="dark" />
    </div>
  );
};

export default Options;
