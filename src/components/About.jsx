import React from 'react';

const About = () => {
    return (
        <div className='w-full bg-black'>
            <section className="overflow-hidden w-[90%] mx-auto pt-20 pb-4 lg:pt-0 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4 ">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl "
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative  my-4 hover:rounded-2xl overflow-hidden">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl hover:scale-110 transition-all duration-500 hover:rounded-2xl overflow-hidden"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 ">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-2xl text-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-yellow-300 to-10% animate-fade-down animate-once animate-delay-1000 animate-ease-in">
                  -- ABOUT US --
                </span>
                <h2 className="mb-5 text-xl lg:text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] animate-fade-right animate-once animate-delay-1000 animate-ease-in">
                Empowering your digital journey with precision solutions.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                At SM IT Solutions, we believe that innovation drives success. We specialize in specialized IT services that utilize cutting-edge technologies. Our devoted teams collaborate closely with customers to understand their requirements and provide dependable, effective solutions that surpass expectations. Our passion for finding solutions and our commitment to providing innovative IT services drive us as a quick-witted company, ensuring companies thrive in the modern digital landscape.

                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                We are more than just service providers, we are also partners in digital transformation. Join us and discover the power of innovation firsthand. Join us on this exciting journey as we transform the way businesses use technology. Let's bring out the best in your business together, so that the future is brighter and more interconnected.
                </p>
                
                <button className="my-5 bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-yellow-300 hover:to-orange-500 text-white font-bold py-2 px-6 rounded-ss-xl rounded-ee-xl focus:outline-none focus:shadow-outline" >Get In Touch</button>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* https://img.freepik.com/free-vector/brainstorming-concept-landing-page_23-2148298375.jpg?w=996&t=st=1714755336~exp=1714755936~hmac=b428c9b6f79aa9fda647a53dc14bb709bba53cb08da110a0468676b8e052ccc7 */}
        </div>
    );
};

export default About;