import { Button } from 'flowbite-react';
import React from 'react';

const Home = () => {
    return (
        <div className='b w-[90%] mx-auto flex items-center gap-4 justify-between'>
            {/* Text */}
            <div className='w-[50%]'>
                <h1 className='text-5xl font-semibold '>Are You Looking For Best IT Service Provider?</h1>
                <p className='text-4xl font-bold my-3'><span>SM IT SOLUTION</span> is Your Best Partner</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sint quis cumque, beatae iste dignissimos? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, asperiores.</p>

                <Button className='my-4' gradientDuoTone="redToYellow">Get In Touch</Button>
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