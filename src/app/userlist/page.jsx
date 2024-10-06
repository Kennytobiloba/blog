"use client"

import React from 'react';
const Page = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">User List</h1>

      {/* Single User Card */}
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md mb-4">
        <div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-600">Email: johndoe@example.com</p>
        </div>
        <div className="flex space-x-4">
          {/* Edit Button */}
          <button
            className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-100 transition duration-200"
          >
            Edit
          </button>

          {/* Delete Button */}
          <button
            className="text-red-600 hover:text-red-800 font-medium px-4 py-2 rounded-md border border-red-600 hover:bg-red-100 transition duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
