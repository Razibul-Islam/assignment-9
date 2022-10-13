import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const InnerQuiz = () => {
  const data = useLoaderData().data;
  // console.log(data);
  const { id, logo, name, questions, total } = data;
  return (
    <div>
      <h1 className="text-7xl font-semibold text-center my-5">Start {name} Quiz</h1>
      {/* <h2 className="text-4xl font-semibold text-center my-5">Quiz of { name}</h2> */}
      {questions.map((question) => (
        <Quiz key={id} questions={question}></Quiz>
      ))}
    </div>
  );
};

export default InnerQuiz;
