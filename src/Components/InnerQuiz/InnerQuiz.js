import React from "react";

const InnerQuiz = () => {
  return (
    <div>
      <h1 className="text-7xl font-semibold text-center my-5">Start Quiz</h1>
      <div className="w-3/5 border-2 border-red-600 mx-auto">
        <div>
                  <p>question:</p>
                  
        </div>
        <div className="grid grid-cols-2 grid-rows-2">
          <p>
            <input type="radio" name="radio-1" className="radio" />
          </p>
          <p>
            <input type="radio" name="radio-1" className="radio" />
          </p>
          <p>
            <input type="radio" name="radio-1" className="radio" />
          </p>
          <p>
            <input type="radio" name="radio-1" className="radio" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default InnerQuiz;
