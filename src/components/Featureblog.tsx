import React from 'react';
import { Featurepost } from './data';
import Blog from './Blog';



const Featureblog = () => {
  return (
   <div className=' mt-6 w-[98%] mx-auto'>
    <h1 className='lg:text-4xl md:text-3xl text-2xl font-bold'> Featured Posts</h1>
    <div className="grid sm:grid-cols-3 mt-10  grid-cols-1  gap-8">
      {Featurepost.map((post : any, index) => (
        <Blog key={index} Featurepost={post} />
      ))}
    </div>

   </div>
  );
};

export default Featureblog;
