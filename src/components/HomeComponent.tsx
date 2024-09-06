import React from 'react';
import Image from 'next/image';
import background from '../assests/woman.jpg'; // Corrected the spelling of "assets"
import First from '../assests/First.jpg';
import Second from '../assests/Second.jpg';
import Third from '../assests/three.jpg';
import Navbar from './Navbar';

const HomeComponent = () => {
  return (
    <div className="relative lg:h-[170vh] md:h-[120vh] h-[150vh] w-full">
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
      <div className="relative z-20 -top-[20%] text-center flex flex-col mx-auto items-center justify-center h-full">
        <h1 className="lg:text-[50px] md:text-[30px] text-[30px] font-bold lg:leading-[60px] leading-[36px] text-white w-full md:w-[60%]">
          Unveiling All the Latest Fashion Trends
        </h1>
        <p className="text-[16px] text-white mt-4 w-[96%] md:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum.
        </p>
        <button className="px-4 mt-8 py-2 text-center bg-red-900 text-white">Browse Posts</button>
      </div>

      {/* Image Section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:-bottom-[20%] w-full flex justify-between bottom-0 gap-4 px-4">
        <Image
          src={First}
          alt="First Image"
          width={500}
          height={500}
          style={{ objectFit: 'cover' }}
          className="w-[32%] lg:mt-20" // Each image takes up approximately one-third of the width
        />
        <Image
          src={Second}
          alt="Second Image"
          width={500}
          height={500}
          style={{ objectFit: 'cover' }}
          className="w-[32%]"
        />
        <Image
          src={Third}
          alt="Third Image"
          width={500}
          height={500}
          style={{ objectFit: 'cover' }}
          className="w-[32%] mt-20 lg:block hidden"
        />
      </div>
    </div>
  );
};

export default HomeComponent;
