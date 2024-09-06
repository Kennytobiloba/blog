import React from 'react';
import img from '../assests/trendone.jpg'; // Ensure the path is correct (double-check "assets" spelling)
import Image from 'next/image';

const Collaborate = () => {
  return (
    <div className='w-[100%] h-[70vh] relative mt-20'>
      <div className='absolute inset-0'>
        <Image 
          alt='' 
          src={img} 
          fill // Replaces layout="fill"
          style={{ objectFit: 'cover' }} // Replaces objectFit="cover"
          quality={100}
          className='-z-[20]'
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-transparent opacity-70 z-0"></div>
      
      <div className="absolute z-20 top-[20%] text-center flex flex-col mx-auto items-center justify-center h-full">
        <h1 className="lg:text-[50px] md:text-[30px] w-full md:w-[60%] text-[30px] font-bold lg:leading-[60px] leading-[36px] text-white">
          Let’s Collaborate
        </h1>
        <p className='text-[16px] w-[96%] md:w-[60%] text-white mt-4'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
        </p>
        <button className='px-8 mt-8 py-2 text-center bg-red-900 text-white'>Contact me</button>
      </div>
    </div>
  );
}

export default Collaborate;
