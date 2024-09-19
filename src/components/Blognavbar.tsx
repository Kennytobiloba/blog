"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'; // Import menu icons

 

const Blognavbar = () => {
    
  // State for mobile menu toggle
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div>
         {/* Navbar */}
      <div className='w-full bg-white text-black'>
        <div className='flex justify-between lg:w-[80%] lg:mx-auto h-20 text-black items-center'>
          <div>
            <h5>MCKENZIE</h5>
            <h5>Fashion Blog</h5>
          </div>
          <div className='lg:hidden'>
            {/* Mobile menu toggle icon */}
            {isMobileMenuOpen ? (
              <FiX className='text-2xl cursor-pointer' onClick={handleToggleMenu} />
            ) : (
              <FiMenu className='text-2xl cursor-pointer' onClick={handleToggleMenu} />
            )}
          </div>

          <div className="lg:flex gap-4 h-10 items-center hidden">
            <div className='flex flex-col lg:flex-row lg:gap-4'>
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
            </div>
            <button className='mt-4 lg:mt-0 px-4 py-2 text-center bg-red-900 text-white'>Contact Me</button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className='lg:hidden flex flex-col  bg-red-950  text-white items-center p-4'>
            <h3 className='hover:text-red-100 cursor-pointer py-2'>Home</h3>
            <h3 className='hover:text-red-100 cursor-pointer py-2'>About</h3>
            <h3 className='hover:text-red-100 cursor-pointer py-2'>Blog</h3>
            <h3 className='hover:text-red-100 cursor-pointer py-2'>Contact</h3>
            
            <button className='mt-4 px-4 py-2 bg-red-900 text-white'>Contact Me</button>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Blognavbar
