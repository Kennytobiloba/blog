import React from 'react'
import { Relatedpost } from './data';
import Blog from './Blog'

const Related = () => {
    
  return (
   <div className='lg:w-[60%] w-full lg:mx-auto p-2'>
    <h1 className='text-center text-[30px] font-semibold mb-6'>Related post</h1>
      <div className='  gap-4 grid grid-cols-2'>
        {
            Relatedpost.map((post:any, index) => (
               <Blog key={index}  Featurepost={post}/>
            ))
        }

    </div>

   </div>
  )
}

export default Related