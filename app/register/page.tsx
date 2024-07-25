// pages/register.tsx
import Link from 'next/link';
import React from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-xl p-10">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
                sign in to your account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-3">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <div className="relative">
                <FaUser className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-md relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <FaEnvelope className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <div>
            <Button className="w-full bg-[#fe8d31] hover:bg-[#fe3d31] text-white font-semibold tracking-wider py-3 rounded-md">
              Register
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
