import React from 'react';
import CountUp from 'react-countup';

const CountingNumber = () => {
    return (
        <div className="bg-slate-100 py-20 flex justify-around flex-col lg:flex-row gap-y-10 lg:gap-y-0">
      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-semibold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2">
        <CountUp enableScrollSpy={true} end={5000}></CountUp>+
      </h1>
      <p className="lg:text-xl text-lg font-bold">Happy Customers</p>
      </div>
      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={37}></CountUp>+</h1>
      <p className="text-lg lg:text-2xl">Medicine Product</p>
      </div>

       <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={30}></CountUp>+</h1>
      <p className="text-lg lg:text-xl">Imported Countries</p>
      </div>

      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-green-600 to-lime-400 hover:from-lime-300 hover:to-green-600">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={20}></CountUp>+</h1>
      <p className="text-lg lg:text-xl">Years of Experience</p>
      </div>

      </div>
    );
};

export default CountingNumber;