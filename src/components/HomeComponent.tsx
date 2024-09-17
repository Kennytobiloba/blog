import React from 'react';
import Image from 'next/image';
import background from '../assests/woman.jpg'; // Corrected the spelling of "assets"

import Navbar from './Navbar';

const HomeComponent = () => {
  return (
    <div className="relative  h-[100vh] w-full">
      <div className="relative z-30">
        <Navbar />
      </div>

      <div className="absolute inset-0">
        <Image
          src={background}
          alt="Background"
          fill
          quality={100}
          style={{ objectFit: 'cover' }}
          className="-z-[20]" // Ensure the image stays behind other content
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-transparent opacity-70 z-0"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-20 -top-[6%] text-center flex flex-col mx-auto items-center justify-center h-full">
        <h1 className="lg:text-[50px] md:text-[30px] text-[22px] font-bold lg:leading-[60px] leading-[28px] text-white w-full md:w-[60%]">
          Unveiling All the Latest Fashion Trends
        </h1>
        <p className="md:text-[16px] text-[16px] text-center text-white mt-4 w-[96%] md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
        </p>
        <button className="px-4 mt-8 py-2 text-center bg-red-900 text-white">Browse Posts</button>
      </div>

      
      </div>
  
  );
};

export default HomeComponent;
