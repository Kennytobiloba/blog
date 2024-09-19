import { AllBlog } from '@/components/data'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import background from "../../assests/Second.jpg"
import Latest from '@/components/Latest'

const page = () => {
  return (
    <div>
        <div className="relative  h-[60vh] w-full">
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
        <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-transparent opacity-90 z-20"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-20 -top-[6%]  text-center flex flex-col mx-auto items-center justify-center h-full">
        <h1 className="lg:text-[50px] md:text-[30px] text-[22px] font-bold lg:leading-[60px] leading-[28px] text-white w-full md:w-[60%]">
          Blog
        </h1>
        
       
      </div>

      
      </div>
      <Latest/>
      
    </div>
  )
}

export default page
