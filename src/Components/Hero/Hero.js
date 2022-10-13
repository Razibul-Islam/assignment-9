import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import QuizCatagories from "../Quiz-Catagories/QuizCatagories";

const Hero = () => {
  const { data } = useLoaderData();

  // console.log(data);
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-center items-center gap-3 mx-auto flex-col lg:flex-row">
          <img
            src="https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/MyBayut-Quiz-Cover-.jpg"
            className="rounded-lg shadow-2xl lg:w-[50rem] lg:h-96"
            alt="Muri Khaw"
          />
          <div className="text-center">
            <h1 className="text-5xl font-bold">Ready for Quiz?</h1>
            <p className="py-6 text-xl">
              Welcome, to
              <span className="font-semibold text-blue-900"> QUIZER</span>. You
              can test your knowledge about Programming Language and IT.
            </p>
            <Link to="/statics">
              <button className="btn btn-primary">Statics</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-7">
        {data.map((quiz) => (
          <QuizCatagories key={quiz.id} quiz={quiz}></QuizCatagories>
        ))}
      </div>
    </div>
  );
};

export default Hero;
