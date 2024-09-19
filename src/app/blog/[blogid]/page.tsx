"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { AllBlog } from '@/components/data';
import Footer from '@/components/Footer';
import Related from '@/components/Related';
import Blognavbar from '@/components/Blognavbar';

const Page: React.FC = () => {
  const params = useParams();
  const { blogid } = params;

  // Find the blog post with the matching blogid
  const blogPost = AllBlog.find(post => post.id.toString() === blogid);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className='w-full bg-white text-black overflow-hidden min:h-[70vh]'>
      {/* Navbar */}
      <Blognavbar />

      {/* Blog content */}
      <div className='flex flex-col lg:items-center items-start lg:w-[68%] w-full lg:mx-auto mt-20 lg:p-6 p-2'>
        <Image src={blogPost.img} alt={blogPost.topic} width={800} height={400} />
        <div className='w-full text-start mt-6'>
          <p className='lg:text-[30px] text-[20px] md:text-[26px] text-start font-bold lg:leading-10'>{blogPost.topic}</p>
          <p className='mt-2'>Leave a Comment / October 17, 2023</p>
        </div>
      </div>

      <div className='w-full bg-white lg:p-20 p-2'>
        <p className='lg:w-[70%] w-full lg:mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>

      <div>
        <Related />
      </div>

      <div className='lg:w-[62%] w-full lg:mx-auto mt-6'>
        <h3 className='text-[20px] font-extrabold'>Leave a Comment</h3>
        <p className='text-[18px] mb-2'>Your email address will not be published...</p>
        <textarea cols={40} rows={10} placeholder='Type here..' className='w-full border border-black p-4 bg-purple-50'></textarea>
        <div className='flex lg:gap-2 gap-2 mt-4'>
          <input type="text" placeholder='Name*' className='px-4 py-4 outline-none border border-black bg-pink-50' />
          <input type="email" placeholder='Email*' className='px-4 py-4 outline-none border border-black bg-pink-50' />
          <input type="text" placeholder='Website' className='px-4 py-4 outline-none border border-black bg-pink-50' />
        </div>
        <div className='flex gap-4 mt-4'>
          <input type="checkbox" />
          <p>Save my name, email, and website in this browser for the next time I comment.</p>
        </div>
        <button className='px-8 py-2 bg-red-600 text-white mt-6'>Post Comment</button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Page;
