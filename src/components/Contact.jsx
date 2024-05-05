import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div>
      <div className="text-center mt-16 mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold">Contact Us</h1>
        <p className="text-lg text-gray-500 mt-3">
          From Seed to Success, We're Here to Help. Rooted in Relationships,
          Start the Conversation, Growing Together.
        </p>
      </div>

      <div className=" w-[90%] mx-auto justify-between flex lg:gap-x-10 flex-col md:flex-row items-center ">
        <div className="w-[35%] ">
          <img
            src="https://img.freepik.com/free-vector/flat-man-illustration-customer-support_23-2148889244.jpg?w=900&t=st=1714752854~exp=1714753454~hmac=693c2d8ef0bb8d6f6b35a6a9c7327271968b6981c4306178ab77c84102bda23c"
            alt=""
          />
        </div>

        <div className="w-[60%] ">
          

          <div className="flex justify-between text-center">
            <div>
            <MdEmail className="lg:text-7xl inline-block bg-orange-100 rounded-full p-3 text-orange-500" />
              <p className="font-bold text-xl mt-7 mb-4">Email Address</p>
              <p className="text-lg">smitsolution@gmail.com</p>
              <p className="text-lg">hrsolution@gmail.com</p>
            </div>
            <div>
            <BiSolidPhoneCall className="lg:text-7xl inline-block bg-orange-100 rounded-full p-3 text-orange-500 " />
              <p className="font-bold text-xl mt-7 mb-4">Phone Number</p>
              <p className="text-lg">+88 8796452245</p>
              <p className="text-lg">+88 8796452245</p>
            </div>
            <div>
            <FaLocationDot className="lg:text-7xl inline-block bg-orange-100 rounded-full p-3 text-orange-500" />
              <p className="font-bold text-xl mt-7 mb-4">Our Office Address</p>
              <p className="text-lg">Nasirabad Properties Road 1, House B5 <br /> Chittagong, Bangladesh.</p>
            </div>

          </div>

          
        </div>
      </div>

      {/* Address part */}
      <div className=" lg:w-[90%] mx-auto flex flex-col md:flex-row items-center gap-7 lg:gap-0 justify-between my-16">
        


        <div className="md:w-1/2">
          <div className="text-2xl font-bold mb-6 ">-- Get In Touch --</div>
          <form action="#" className="w-full">
            <div className="flex flex-wrap -mx-2 mb-6">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none focus:border-orange-400 transition duration-300"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full h-12 border border-gray-300 rounded px-4 focus:outline-none  focus:border-orange-400 transition duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                cols="30"
                rows="10"
                placeholder="Write your Message..."
                required
                className="w-full h-32 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-orange-400  transition duration-300"
              ></textarea>
            </div>
            <div className="flex items-center">
              <button
                type="submit"
                className="group mt-2  border border-orange-400 hover:border-none relative h-12 w-44 overflow-hidden rounded-ss-xl rounded-ee-xl font-bold bg-slate-50 text-lg shadow-md hover:shadow-lg"
              >
                <div className="absolute inset-0 w-3 bg-gradient-to-r from-orange-500 to-yellow-300 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">
                  Send Message
                </span>
              </button>
            </div>
          </form>
        </div>
        <div>
          <iframe
            className=""
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4512217194696!2d91.8140612695338!3d22.360994938988757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd88d0af07d61%3A0xbbf9590c4e77a64d!2sRoad%20No.%201%2C%20Chittagong!5e0!3m2!1sen!2sbd!4v1714885505967!5m2!1sen!2sbd"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;