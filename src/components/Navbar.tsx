"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import hamburger and close icons

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  

  // TypeScript function for handling the toggle
  const handleToggle = (): void => {
    console.log("Toggle clicked"); // Add this for debugging
    setToggle((prev) => !prev);
  };

  return (
    <div className='w-full h-20  text-white z-20'>
      <div className='flex justify-between w-[90%] mx-auto h-full items-center'>
        <div>
          <h4 className='font-extrabold text-lg'>MCKENZIE</h4>
          <h4 className='text-lg'>Fashion Blog</h4>
        </div>

        <div className=' md:flex gap-4  hidden text-[16px] items-center justify-center'>
          <Link href="/" className='hover:text-red-100 text-[16px] mr-2 cursor-pointer'>
            Home
          </Link>
          <Link href="/profile" className='hover:text-red-100 text-[14px] cursor-pointer'>
            Profile
          </Link>
          <Link href="/blogs" className='hover:text-red-100 text-[16px]  cursor-pointer'>
            Blog
          </Link>
          <Link href="/createblog" className='hover:text-red-100 text-[16px]  cursor-pointer'>
            Createblog
          </Link>
          <Link href="/login" className='hover:text-red-100 text-[16px]  cursor-pointer'>
            Login
          </Link>
          <Link href="/Register" className='hover:text-red-100 text-[16px]  cursor-pointer'>
            Register
          </Link>

          <button className='px-4 py-2 text-[16px]  rounded-md bg-red-900 text-white'>
            Contact Me
          </button>
        </div>

        <div className='md:hidden  block'>
          {!toggle ? (
            <FiMenu className='text-3xl cursor-pointer' onClick={handleToggle} />
          ) : (
            <FiX className='text-3xl cursor-pointer' onClick={handleToggle} />
          )}
        </div>
      </div>

      {toggle && (
        <div className='md:hidden flex flex-col gap-4 bg-gray-800 text-white px-6 py-4'>
          <Link href="/" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
            Home
          </Link>
          <Link href="/profile" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
          Profile
          </Link>
          <Link href="/blogs" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
            Blog
          </Link>
          <Link href="/createblog" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
            CreateBlog
          </Link>
          <Link href="/login" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
            Login
          </Link>
          <Link href="/Register" className='hover:text-red-100 cursor-pointer' onClick={handleToggle}>
            Register
          </Link>
          <button className='px-4 py-2 text-center bg-red-900 text-white'>
            Contact Me
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
