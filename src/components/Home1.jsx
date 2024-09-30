
import React from 'react'
import { FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';


function Home1() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
    {/* Navbar */}
    <nav className="  bg-gray-800">
     <div className='max-w-7xl mx-auto  flex justify-between items-center px-4 py-3'>
     <div className="flex items-center">
        <img
          src="https://via.placeholder.com/40"
          alt="Logo"
          className="h-10 w-10"
        />
        <span className="ml-3 text-lg font-bold">CapyBara</span>
      </div>
      <a href="#" className="text-blue-400 flex items-center">
        <FaTelegram className="mr-1" />
        Play Game
      </a>
     </div>
     
    
    </nav>

    {/* Main Content */}
    <div className="text-center py-16 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">Where Players Earn Automatically</h1>
      <p className="text-gray-400 text-lg mb-8">
        CapyBara is a fun and easy Tap to Earn game where players can earn a 10% commission on every tap, making it an enjoyable way to turn gameplay into real rewards.
      </p>

      {/* Play Button */}
      <a
        href="#"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-medium mb-4"
      >
        Start Playing - 10% Referral
      </a>

      {/* CapyBara Image */}
      <div className="mt-10">
        <img
          src="https://via.placeholder.com/150"
          alt="CapyBara"
          className="mx-auto"
        />
      </div>
    </div>

    {/* Footer */}
    <footer className="text-center py-6 bg-gray-800">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" className="text-gray-400">
          <FaTelegram size={30} />
        </a>
        <a href="#" className="text-gray-400">
          <FaTwitter size={30} />
        </a>
        <a href="#" className="text-gray-400">
          <FaYoutube size={30} />
        </a>
      </div>
      <p className="text-gray-500 text-sm">&copy; 2024 CapyBara Minister</p>
    </footer>
  </div>
  )
}

export default Home1