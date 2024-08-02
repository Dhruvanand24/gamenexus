import React from 'react';
import controller from "../assets/controller.png";

const Hero = () => {
  return (
    <div className='flex flex-col items-center sm:flex-row sm:justify-between px-5 sm:px-40 py-10'>
      {/* Mobile view: Text and Image stacked from top to bottom */}
      <div className='mb-8 sm:mb-0'>
        <h1 className='text-4xl sm:text-8xl text-center sm:text-left font-semibold'>
          Welcome to the <br /> Biggest <br /> Game Library <br />On the Internet
        </h1>
        <div className='flex justify-end mt-3'>
        <p>powered by rawg</p></div>
      </div>

      <div className='w-full sm:w-1/2'>
        <img className='w-full' src={controller} alt="" />
      </div>
    </div>
  );
}

export default Hero;
