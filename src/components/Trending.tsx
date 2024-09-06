import React from 'react';
import Trend from '../assests/trend.jpg'; // Corrected 'assets' spelling
import Image from 'next/image';

const Trending = () => {
  return (
    <div className='w-full bg-red-950 px-8 py-20 mt-14'>
      <div className='grid md:grid-cols-2 grid-cols-1 w-full items-center gap-6 mx-auto'>
        {/* Text Section */}
        <div>
          <h1 className='font-extrabold text-white lg:text-5xl md:text-3xl text-2xl mb-4'>
            Don&apos;t Miss Out on the Latest Fashion Trends!
          </h1>
          <p className='text-[16px] mb-4 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <input 
            type="email" 
            placeholder='Enter your email' 
            className='outline-none mb-4 w-full px-8 py-4' 
          />
          <button className='text-white bg-red-600 px-8 py-2'>Subscribe</button>
        </div>
        
        {/* Image Section */}
        <div className='w-full h-full'>
          <Image 
            src={Trend} 
            alt='Fashion trends' 
            width={500} // Set appropriate width
            height={500} // Set appropriate height
            style={{ objectFit: 'cover' }} // Ensure the image covers the container properly
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
