import React from 'react'
export default function Head() {
  return (
    <div className="flex items-center w-max h-max mx-auto p-4 space-x-4">
      <div className='text-center'>
        <p className="text-2xl md:text-4xl font-semibold">Hello, I am Alex Houle</p>
        <p className="text-xl md:text-3xl" style={{ color: '#D2B48C' }}>
          Software Engineer
        </p>
      </div>
      <img
        className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-gray-300 flex-shrink-0"
        src="profile.png"
        alt="Avatar"
      />
    </div>
  );
}