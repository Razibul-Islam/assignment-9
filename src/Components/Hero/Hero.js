import React from 'react';

const Hero = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-slate-600">
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
      </div>
    );
};

export default Hero;