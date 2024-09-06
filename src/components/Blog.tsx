"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';


interface BlogProps {
  Featurepost: {
    id: string;
    img: string;
    topic: string;
    des: string;
  };
}

const Blog: React.FC<BlogProps> = ({ Featurepost }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/blog/${Featurepost.id}`);
  };

  return (
    <div className="mb-6  ">
      <Image
        src={Featurepost.img}
        alt={Featurepost.topic}
        width={500}
        height={300}
        objectFit="cover"
      />
      <h2 className="lg:text-2xl md:text-[18px] text-[16px] font-bold">{Featurepost.topic}</h2>
      <p className="text-gray-600">{Featurepost.des}</p>
      <div className='flex gap-4'>
        <button onClick={handleClick} className="text-red-600 flex items-center">
          <span className='cursor-pointer'>Readmore</span>
          <span className="ml-2 text-sm text-red-500 cursor-pointer">
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Blog;
