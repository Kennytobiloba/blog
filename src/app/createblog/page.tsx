import Blognavbar from '@/components/Blognavbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Blognavbar/>
     <div>
         <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Create New Blog</h1>

        <form>
          {/* Blog Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          {/* Blog Content */}
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
              Blog Content
            </label>
            <textarea
              id="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog content here"
              rows={6}
            ></textarea>
          </div>

          {/* Author Name */}
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
            />
          </div>

          {/* Blog Image */}
          <div className="mb-6">
            <label htmlFor="blogImage" className="block text-gray-700 font-medium mb-2">
              Upload Blog Image
            </label>
            <input
              type="file"
              id="blogImage"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
      
    </div>
    </>
   
  )
}

export default page
