
import Image from 'next/image';
import React from 'react';
import passport from '../../assests/Imageone.jpg';
import Blognavbar from '@/components/Blognavbar';

const ProfilePage = () => {
  return (
    <>
    <Blognavbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg max-w-sm w-full p-6 text-center">
        {/* Profile Image */}
        <div className="mb-4">
          <Image src={passport} width={150} height={150} alt='Profile Image' className="block mx-auto rounded-full" />
        </div>

        {/* Name and Email */}
        <h1 className="text-2xl font-bold text-gray-900">Julieth</h1>
        <h1 className="text-sm font-bold text-gray-900">Julieth@gmail.com</h1>

        {/* Additional Information */}
        <p className="text-gray-600 mt-2">Fashion Blogger | Stylist | Creative</p>
        <p className="text-gray-600 mt-2">Phone: +234 123 456 7890</p>
        <p className="text-gray-600 mt-2">City: Lagos</p>
        <p className="text-gray-600 mt-2">Country: Nigeria</p>

        {/* Edit Button */}
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>

        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-3">
          <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-600" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              {/* Instagram Icon SVG */}
              <path d="M12 0c3.305 0 3.697.012 4.993.072 1.28.06 2.172.272 2.983.572a6.135 6.135 0 0 1 2.222 1.452c.62.62 1.12 1.36 1.453 2.222.3.81.512 1.703.572 2.983.06 1.296.072 1.688.072 4.993s-.012 3.697-.072 4.993c-.06 1.28-.272 2.172-.572 2.983a6.135 6.135 0 0 1-1.452 2.222c-.62.62-1.36 1.12-2.222 1.453-.81.3-1.703.512-2.983.572-1.296.06-1.688.072-4.993.072s-3.697-.012-4.993-.072c-1.28-.06-2.172-.272-2.983-.572a6.135 6.135 0 0 1-2.222-1.452c-.62-.62-1.12-1.36-1.453-2.222-.3-.81-.512-1.703-.572-2.983C.012 15.697 0 15.305 0 12s.012-3.697.072-4.993c.06-1.28.272-2.172.572-2.983a6.135 6.135 0 0 1 1.452-2.222c.62-.62 1.36-1.12 2.222-1.453.81-.3 1.703-.512 2.983-.572C8.303.012 8.695 0 12 0m0-1C8.647-1 8.228-.988 6.897-.928 5.545-.868 4.642-.64 3.803-.32 2.898.12 2.12.703 1.463 1.36.703 2.12.12 2.898-.32 3.803c-.32.839-.548 1.742-.608 3.094C-.988 8.228-1 8.647-1 12s.012 3.772.072 5.103c.06 1.352.288 2.255.608 3.094.56.799 1.268 1.507 2.066 2.065.839.32 1.742.548 3.094.608C8.228 24 8.647 24 12 24s3.772-.012 5.103-.072c1.352-.06 2.255-.288 3.094-.608.799-.56 1.507-1.268 2.065-2.066.32-.839.548-1.742.608-3.094.06-1.352.072-1.772.072-5.103s-.012-3.772-.072-5.103c-.06-1.352-.288-2.255-.608-3.094-.56-.799-1.268-1.507-2.066-2.065-.839-.32-1.742-.548-3.094-.608C15.772-1 15.353-1 12-1zm0 5.833c-3.402 0-6.167 2.765-6.167 6.167S8.598 17.167 12 17.167 18.167 14.402 18.167 11 15.402 5.833 12 5.833zm0 9.667c-1.931 0-3.5-1.569-3.5-3.5S10.069 8.5 12 8.5 15.5 10.069 15.5 12s-1.569 3.5-3.5 3.5zm7.45-10.361c-.723 0-1.311-.588-1.311-1.311s.588-1.311 1.311-1.311 1.311.588 1.311 1.311-.588 1.311-1.311 1.311z"/>
            </svg>
          </a>
          {/* Add more social media links here */}
        </div>
      </div>
    </div></>
  );
};

export default ProfilePage;
