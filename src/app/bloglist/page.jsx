"use client"
import React from 'react';

const BlogListPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Blog List</h1>

      {/* Single Blog Card */}
      <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
        {/* Blog Title */}
        <h2 className="text-xl font-semibold">How to Learn React in 2024</h2>

        {/* Blog Content Preview */}
        <p className="text-gray-700 my-2">
          This blog post covers the best practices and steps to learn React in the upcoming year...
        </p>

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-4">
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

      {/* Another Blog Card */}
      <div className="p-4 mb-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Understanding JavaScript Closures</h2>
        <p className="text-gray-700 my-2">
          Closures are one of the most powerful features of JavaScript. This post explains how they work and how to use them...
        </p>

        <div className="flex justify-end space-x-4 mt-4">
          <button className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-100 transition duration-200">
            Edit
          </button>
          <button className="text-red-600 hover:text-red-800 font-medium px-4 py-2 rounded-md border border-red-600 hover:bg-red-100 transition duration-200">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
