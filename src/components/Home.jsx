import React from 'react';
import "./Home.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='b w-[90%] mx-auto flex items-center gap-4 justify-between'>
            {/* Text */}
            <div className='w-[50%]'>
                <h1 className='text-5xl font-semibold '>Are You Looking For Best IT Service Provider?</h1>
                <p className='text-4xl font-bold my-3'><span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ...'>SM IT SOLUTION</span> is Your Best Partner</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sint quis cumque, beatae iste dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, asperiores.</p>

                <button className="bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Get In Touch</button>

                {/* Home Icon */}
                <div className="flex text-5xl w-[80%] mx-auto justify-around lg:justify-between lg:w-[35%] lg:mx-0 mb-8">
                <a
              className="rounded-full shadow-xl text-blue-600 hover:tada"
              to="https://www.facebook.com/tazangroup.bd/"
              target="_blank"
            >
              <FaFacebook />
            </a>

            <a
              className="rounded-full
             shadow-xl text-sky-600 hover:tada"
              to="https://www.linkedin.com/in/tazan-agro-ltd/?originalSubdomain=bd"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              className="rounded-full shadow-xl text-red-600 bg-slate-100 hover:tada"
              to="https://www.youtube.com/@TazanGroup"
              target="_blank"
            >
              <FaYoutube />
            </a>

            
                </div>
            </div>

            {/* Home images */}
            <div>
                <img className='b' src=" https://i.ibb.co/xh6kMYH/Screenshot-2024-02-01-at-10-52-45-removebg-preview.png" alt="Home Img" />

                {/* https://i.ibb.co/G5jLn7H/man-is-looking-computer-screen-that-has-word-time-it-910054-1833.jpg */}
            </div>
        </div>
        
    );
};

export default Home;