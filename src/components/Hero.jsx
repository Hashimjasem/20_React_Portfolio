import React from 'react';
import Typed from 'react-typed';
import Avatar1 from '../Assets/bitmoji_carpet.png'

const Hero = () => {
  return (
    <div className="w-full py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 bg-[#254f8d] py-4 px-6 mx-4 text-white rounded-lg" >
        <img src={Avatar1} alt="laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center ">

          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold py-2 ">About Me</h1>
          <div>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold'>I am a 21 year old  Australian/Iraqi who loves
              <Typed
                className='md:text-3xl sm:text-2xl text-xl font-bold md:pl-2 pl-1'
                strings={['tech.', 'nature.', 'engineering.', 'sports.', 'challenges.']}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              </p>
              <p className='py-2'>
                I am a recent Bootcamp graduate and I have become obsessed with becoming a better programmer.
                
              </p>
              <p className='py-2'>I am a full-stack developer, but I found that I enjoy the creative work of front-end development.</p>
              <p className='py-2'>Im now looking to get into the industry and face new challenges!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

