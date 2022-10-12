import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCatagories from '../Quiz-Catagories/QuizCatagories';

const Hero = () => {
  // const quizCatagories = useLoaderData();
  // const quizCatagoriesAll = quizCatagories.data;
  // console.log(quizCatagoriesAll);
    return (
      <div>
        <div className="hero min-h-fit">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://placeimg.com/260/400/arch"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Ready for Quiz?</h1>
              <p className="py-6 text-xl">
                Welcome, to
                <span className="font-semibold text-blue-900"> QUIZER</span>.
                You can test your knowledge about Programming Language and IT.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-7">
          {/* {quizCatagoriesAll.map((quiz) => (
            <QuizCatagories key={quiz.id} quiz={quiz}></QuizCatagories>
          ))} */}
          <QuizCatagories></QuizCatagories>
        </div>
      </div>
    );
  };
  

export default Hero;