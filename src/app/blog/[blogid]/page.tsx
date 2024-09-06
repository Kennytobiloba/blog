"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image'; // Import Image for optimized image rendering
import { AllBlog} from '@/components/data';
import Footer from '@/components/Footer';
import Related from '@/components/Related';



const Page: React.FC = () => {
  const params = useParams();
  const { blogid } = params; // Extract the blogid from the URL

  // Find the blog post with the matching blogid
  const blogPost = AllBlog.find(post => post.id.toString() === blogid);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className='w-full bg-white text-black overflow-hidden min:h-[70vh]'>
      <div className='w-full bg-white text-black '>
        <div className='flex justify-between lg:w-[80%]  lg:mx-auto h-20 text-black items-center'>
          <div>
            <h5>MCKENZIE</h5>
            <h5>Fashion Blog</h5>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-4 h-10 items-center'>
              <h3 className='hover:text-red-100 cursor-pointer'>Home</h3>
              <h3 className='hover:text-red-100 cursor-pointer'>About</h3>
              <h3 className='hover:text-red-100 cursor-pointer'>Blog</h3>
              <h3 className='hover:text-red-100 cursor-pointer'>Contact</h3>
            </div>
            <button className='px-4 py-2 text-center bg-red-900 text-white'>Contact Me</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:items-center items-start lg:w-[68%] w-full lg:mx-auto mt-20 lg:p-6 p-2'>
        <Image src={blogPost.img} alt={blogPost.topic} width={800} height={400} />
        <div className='w-full text-start  mt-6'>
          <p className='lg:text-[30px] text-[20px] md:text-[26px] text-start font-bold lg:leading-10'>{blogPost.topic}</p>
          <p className='mt-2'>Leave a Comment / October 17, 2023</p>
        </div>


      </div>

      
      <div className='w-full bg-white lg:p-20 p-2 '>
          <p className='lg:w-[70%] w-full lg:mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

        </div>
        <div>
          <Related/>
        </div>

        <div className='lg:w-[62%] w-full lg:mx-auto mt-6'>
          <h3 className='text-[20px] font-extrabold'>Leave a Comment</h3>
          <p className='text-[18px] mb-2'>Your email address will not be published. Required fields are marked *</p>
          <textarea name="" id="" cols={40} rows={10} placeholder='Type here..' className='w-full border border-black p-4 bg-purple-50'></textarea>
          <div className='flex lg:gap-2 gap-2 mt-4'>
            <input type="text" name="" placeholder='Name*' id="" className='px-4 py-4 outline-none border border-black bg-pink-50 ' />
            <input type="email" name="" placeholder='Email*' id="" className='px-4 py-4  outline-none border border-black bg-pink-50 ' />
            <input type="text" placeholder='Website' name="" id="" className='px-4 py-4 outline-none border border-black bg-pink-50 ' />


          </div>
        <div className='flex gap-4 mt-4'>
          <input type="checkbox" />
          <p>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <button className='px-8 py-2 bg-red-600 text-white mt-6'>Post Comment</button>

        </div>

        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default Page;
