import React from 'react';

const QuizCatagories = (quiz) => {
    const { logo, name, total, id } = quiz;
    console.log(name);
    return (
      <div className='mx-auto '>
        <div className="card card-side w-full bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default QuizCatagories;