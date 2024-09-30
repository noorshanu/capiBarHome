
import React from 'react'
import { BsTelegram } from 'react-icons/bs';
import { FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';


function Home1() {
  return (
    <div className="min-h-screen  text-white relative">
    {/* Navbar */}
    <nav className="  ">
     <div className='max-w-7xl mx-auto  flex justify-between items-center px-4 py-3'>
     <div className="flex items-center">
        <img
          src="logo1.png"
          alt="Logo"
          className=""
        />
        {/* <span className="ml-3 text-lg font-bold">CapyBara</span> */}
      </div>
      <a href="#" className="text-white flex gap-4 items-center border rounded-xl py-1 px-3">
      Play Game <FaTelegram className="mr-1 text-blue-400 text-xl" />
        
      </a>
     </div>
     
    
    </nav>

    {/* Main Content */}
    <div className="text-center py-16 px-4 max-w-3xl mx-auto">
      <h1 className=' text-4xl text-center font-normal'>
      Where Players 
      </h1>
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#E8483F]">Earn Automatically</h1>
      <p className="text-gray-400 text-lg mb-8">
        CapyBara is a fun and easy Tap to Earn game where players can earn a 10% commission on every tap, making it an enjoyable way to turn gameplay into real rewards.
      </p>

      {/* Play Button */}
      <a
        href="#"
        className=" flex gap-3 items-center max-w-[400px] mx-auto  bg-white text-black py-3 px-8 rounded-lg text-lg font-medium mb-4"
      >
       <BsTelegram className=' text-4xl text-[#229ED9]'/> <strong>Start Playing </strong>   - 10% Referral
      </a>

      {/* CapyBara Image */}

    </div>
    <div className="-mt-[17%] ">
        <img
          src="coin.png"
          alt="CapyBara"
          className="mx-auto"
        />
      </div>
    {/* Footer */}
    <footer className="text-center flex justify-between  items-center flex-col sm:flex-row  max-w-max sm:max-w-7xl mx-auto py-2 relative z-30">
      <div className="flex justify-center space-x-6 ">
        <a href="#" className=" text-white sm:text-black">
          <FaTelegram size={30} />
        </a>
        <a href="#" className="text-white sm:text-black">
          <FaTwitter size={30} />
        </a>
        <a href="#" className="text-white sm:text-black">
          <FaYoutube size={30} />
        </a>
      </div>
      <p className='text-white sm:text-black text-sm font-bold text-center '>
      Happy Players From All Over The World.
      </p>
      <p className="text-white sm:text-black text-sm text-center">&copy; 2024 CapyBara Minister</p>
    </footer>
    <img src="grad.png" alt="" className=' absolute bottom-0 right-0 left-0' />
  </div>
  )
}

export default Home1