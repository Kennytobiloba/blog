import React from 'react';
import Blog from './Blog';
import { latest } from './data';

const Latest = () => {
  return (
    <div>
      <div className='md:mt-6 w-[98%] py-20 px-4 mx-auto'>
        <h1 className='lg:text-4xl md:text-3xl text-[22px] font-bold text-center'>
          Latest Blog Posts
        </h1>
        <div className="grid sm:grid-cols-3 mt-10 grid-cols-1 gap-8">
          {latest.map((post: any, index) => (
            <Blog key={index} Featurepost={post} />
          ))}
        </div>

        <button className="px-16 mt-10 py-2 text-[18px] font-bold bg-red-600 text-white mx-auto block">
          View All
        </button>
      </div>
    </div>
  );
}

export default Latest;
