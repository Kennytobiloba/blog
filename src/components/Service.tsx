import React from 'react';
import Serviceone from '../assests/serviceone.jpg'; // Corrected the 'assets' spelling
import Servicetwo from '../assests/relatedtwo.jpg'; // Ensure correct image file
import Image from 'next/image';

const Service = () => {
  return (
    <div className='md:w-[98%] mx-auto w-full lg:mt-20 mt-14'>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-12 items-center'>
        {/* Image Section */}
        <div className='grid grid-cols-2 lg:gap-6 gap-2'>
          <div className='w-full h-full'>
            <Image 
              src={Servicetwo} 
              alt='Service Two' 
              width={500} // Set appropriate width
              height={500} // Set appropriate height
              style={{ objectFit: 'cover' }} // Use style for object fitting
              className='w-full h-full'
            />
          </div>
          <div className='w-full h-full mt-10'>
            <Image 
              src={Serviceone} 
              alt='Service One' 
              width={500} // Set appropriate width
              height={500} // Set appropriate height
              style={{ objectFit: 'cover' }} // Use style for object fitting
              className='w-full h-full'
            />
          </div>
        </div>

        {/* Text Section */}
        <div>
          <h1 className='lg:text-5xl md:text-3xl text-2xl leading-[36px] lg:leading-[60px] mb-4 w-full font-semibold text-black tracking-wider'>
            I’m Grace McKenzie, a Fashion Expert and a Professional Writer
          </h1>
          <p className='text-[16px] mb-4 leading-[26px]'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </p>
          <button className='bg-red-600 text-white px-6 py-2'>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
