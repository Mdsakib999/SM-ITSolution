import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdAppShortcut } from "react-icons/md";
import { TbWorldDollar } from "react-icons/tb";
import { TbBusinessplan } from "react-icons/tb";
import { FaConnectdevelop } from "react-icons/fa6";
import { BiLogoSass } from "react-icons/bi";

const Services = () => {
  return (
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#000000"
          fill-opacity="1"
          d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,32C840,32,960,64,1080,74.7C1200,85,1320,75,1380,69.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div className="w-[90%]  mx-auto lg:mt-[-150px] mb-32">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
            -- OUR SERVICES --
          </h1>
          <p className="font-semibold text-3xl lg:text-5xl my-4">What We Offer!!</p>
          <p className="lg:w-[40%] w-[90%] mx-auto lg:text-lg  text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium unde porro corrupti, magnam quia odit ad quasi deserunt
            fugiat aliquid!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mt-16">
          <div className=" border shadow-xl p-8 rounded-lg hover:shadow-lg hover:shadow-orange-300">
            <FaLaptopCode className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">Web Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>
          <div className=" border shadow-xl p-8 rounded-lg hover:shadow-lg hover:shadow-orange-300">
            <TbWorldDollar className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">Digital Marketing</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>
          <div className=" border shadow-xl p-8 rounded-xl hover:shadow-lg hover:shadow-orange-300">
            <MdAppShortcut className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">App Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>
          <div className=" border shadow-xl p-8 rounded-xl hover:shadow-lg hover:shadow-orange-300">
            <FaConnectdevelop className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">IT Consultancy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>
          <div className=" border shadow-xl p-8 rounded-xl hover:shadow-lg hover:shadow-orange-300">
            <TbBusinessplan className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">Business Development</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>
          <div className=" border shadow-xl p-8 rounded-xl hover:shadow-lg hover:shadow-orange-300">
            <BiLogoSass className="lg:text-6xl text-5xl text-orange-500" />
            <h1 className="my-5  font-bold text-2xl lg:text-3xl">SaaS Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique, explicabo perferendis. Voluptatibus doloribus molestiae
              reiciendis.
            </p>

            <p className=" mt-4 flex items-center gap-x-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ">
              Read More{" "}
              <FaArrowRightLong className="text-orange-400 mt-[0.20rem]" />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
