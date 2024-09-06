import React from 'react';
import trendone from '../assests/trendtwo.jpg'; // Corrected 'assets' spelling
import Image from 'next/image';

const Fashion = () => {
  return (
    <div className='w-full lg:h-[70vh] h-full'>
      <Image 
        src={trendone} 
        alt='Fashion trend' 
        width={1920} // Set appropriate width
        height={1080} // Set appropriate height
        style={{ objectFit: 'cover' }} // Ensures image covers the container properly
        className='w-full h-full'
      />
    </div>
  );
}

export default Fashion;
