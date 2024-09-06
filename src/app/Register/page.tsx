"use client"
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Page = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formValue;

  const handleChange = (e: any) => {
    let { value, name } = e.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Basic validation logic
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // If validation passes, show success toast
    toast.success("Form submitted successfully!");

    // Clear form fields
    setFormValue({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8 mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Register</h2>

        {/* Toast Container */}
        <Toaster position="top-right"  />

        <form className="space-y-4" onSubmit={handleSubmit} method="post">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              value={name}
              onChange={handleChange}
              type="text"
              id="fullName"
              name="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              value={email}
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              value={password}
              onChange={handleChange}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={handleChange}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
