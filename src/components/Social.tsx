import React from 'react';
import imgone from '../assests/Imageone.jpg'; // Corrected 'assets' spelling
import imgtwo from '../assests/imagetwo.jpg';
import imgthree from '../assests/imagethree.jpg';
import imgfour from '../assests/imagefour.jpg';
import imgfive from '../assests/imagefive.jpg';
import imgSix from '../assests/imagesix.jpg';
import Image from 'next/image';

const Social = () => {
  return (
    <div className='w-full mt-6'>
      <h1 className='lg:text-4xl mb-10 md:text-3xl text-lg font-bold text-center'>
        Follow Me On Instagram
      </h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2'>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 1" 
            src={imgone} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 2" 
            src={imgtwo} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 3" 
            src={imgthree} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 4" 
            src={imgfour} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 5" 
            src={imgfive} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
        <div className='w-full h-full'>
          <Image 
            alt="Instagram Image 6" 
            src={imgSix} 
            width={500} 
            height={500} 
            style={{ objectFit: 'cover' }} 
            className='w-full h-full'
          />
        </div>
      </div>
    </div>
  );
}

export default Social;
