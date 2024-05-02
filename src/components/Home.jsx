import React from 'react';

const Home = () => {
    return (
        <div className='b'>
            {/* Text */}
            <div>
                <h1>Are You Looking For Best IT Service Provider?</h1>
                <p>SM IT SOLUTION is Your Best Partner</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident sint quis cumque, beatae iste dignissimos?</p>

                <button>Get Started</button>
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