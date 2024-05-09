import React from 'react';
import CountUp from 'react-countup';

const CountingNumber = () => {
    return (
        <div className=" bg-black py-28 flex justify-around flex-col lg:flex-row gap-y-10 lg:gap-y-0">
      <div className=" w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
      <h1 className="text-6xl mb-2">
        <CountUp enableScrollSpy={true} end={50}></CountUp>+
      </h1>
      <p className="lg:text-xl text-lg font-bold">Happy Clients</p>
      </div>
      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={15}></CountUp>+</h1>
      <p className="text-lg lg:text-2xl">Finished Projects</p>
      </div>

       <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={14}></CountUp>+</h1>
      <p className="text-lg lg:text-xl">Team Members</p>
      </div>

      <div className="w-[80%] mx-auto lg:mx-0  lg:w-[18%] text-center text-white text-3xl font-bold rounded-lg shadow-lg py-6 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500">
      <h1 className="text-6xl mb-2"><CountUp enableScrollSpy={true} end={2}></CountUp>+</h1>
      <p className="text-lg lg:text-xl">Years Of Experience</p>
      </div>

      </div>
    );
};

export default CountingNumber;