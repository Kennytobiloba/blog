import React from 'react'

const Footer = () => {
  return (
    <div className=' mt-1 lg:h-[60vh] h-full flex lg:justify-center justify-start w-full bg-red-950 text-white  py-20 px-8'>
        <div className=' grid lg:grid-cols-5  grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='lg:col-span-2'>
              <div className='mb-2 font-semibold'>
              <h4>MCKENZIE</h4>
              <h4>Fashion Blog</h4>
              </div>
              <p className='mb-4 text-sm'>Join our newsletter to stay up to date on features and releases.</p>
              <input type="text" name="" id="" placeholder='Enter your email' className='w-full py-4 px-4 outline-none' />

              <button className='text-lg mt-4 px-8 py-2 text-white bg-red-600'>Subscribe</button>
            </div>

            <div className='flex flex-col gap-4'>
                <h3 className=' text-[22px] font-semibold'>Quick Links</h3>
                <h3 className='text-[16px]'>Home</h3>
                <h3 className='text-[16px]'>About</h3>
                <h3 className='text-[16px]'>Contact</h3>
                <h3 className='text-[16px]'>Blog</h3>
            </div>
            <div className=' flex flex-col gap-4'>
                <h3 className=' font-semibold text-[22px]'>Hot Posts</h3>
                <h3 className='text-[16px]'> Your Guide to Look Stunning in Winter Clothes</h3>
                <h3 className='text-[16px]'>Fall Clothes to look for when shopping</h3>
                <h3 className='text-[16px]'>2023 Fashion trends summary guide</h3>
                
            </div>
            <div className='flex gap-4 flex-col'>
                <h3 className='font-semibold text-[22px]'>Follow Me</h3>
                <h3 className='text-[16px]'> Facebook</h3>
                <h3 className='text-[16px]'>Instagram</h3>
                <h3 className='text-[16px]'>Twitter</h3>
                
            </div>
         


        </div>

    </div>
  )
}

export default Footer