import React from "react";
import { Link } from "react-router-dom";

const QuizCatagories = ({ quiz }) => {
  const { logo, name, total, id } = quiz;
  // console.log(quiz);
  return (
    <div className="card card-side mx-auto w-4/5 lg:h-[90%] lg:flex-none flex lg:flex-row flex-col bg-gray-600 shadow-xl">
      <figure className="py-10">
        <img
          src={logo}
          className="rounded-full bg-black p-2 w-1/2"
          alt="Movie"
        />
      </figure>
      <div className="card-body text-3xl  text-white lg:w-1/2  mx-auto">
        <h2 className="card-title mx-auto text-5xl break-words">{name}</h2>
        <p className="mx-auto">Total: {total}</p>
        <div className="card-actions mx-auto justify-end">
          {/* <Link to={`/${id}`}> */}
          <Link to={`${id}`}>
            <button className="btn  btn-primary">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizCatagories;
