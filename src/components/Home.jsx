import React from 'react';
import "./Home.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Home = () => {
    return (
        <div className=''>
          <div className=' lg:h-[75vh] pt-8 w-[90%] mx-auto lg:flex items-center gap-4 justify-between'>
            {/* Text */}
            <div className='lg:w-[50%]'>
                <h1 className='lg:text-5xl text-2xl font-semibold '>Are You Looking For Best IT Service Provider?</h1>
                <p className='lg:text-4xl text-2xl font-bold lg:my-7 my-3'><span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 from-10%  to-yellow-300 to-90% ...'>SM IT SOLUTION</span> Is Your Best Partner.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sint quis cumque, beatae iste dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, asperiores.</p>

                <button className="my-5 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 text-white font-bold py-2 px-6 rounded-ss-xl rounded-ee-xl focus:outline-none focus:shadow-outline" >Get In Touch</button>

                {/* Home Icon */}
                <div className="mt-7 flex text-5xl w-[80%] mx-auto justify-around lg:justify-between lg:w-[45%] lg:mx-0 mb-8">
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

            <a
              className="rounded-full shadow-xl text-blue-500 bg-slate-100 hover:tada"
              to="https://www.youtube.com/@TazanGroup"
              target="_blank"
            >
              <FaTwitter />
            </a>

            
                </div>
            </div>

            {/* Home images */}
            <div className='lg:w-[48%]'>
                <img className=' w-full' src=" https://i.ibb.co/xh6kMYH/Screenshot-2024-02-01-at-10-52-45-removebg-preview.png" alt="Home Img" />

                {/* https://i.ibb.co/G5jLn7H/man-is-looking-computer-screen-that-has-word-time-it-910054-1833.jpg */}
            </div>

            
        </div>
        <svg className='lg:mt-[-160px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300"><path fill="#00000" fill-opacity="1.0" d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,218.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        
    );
};

export default Home;