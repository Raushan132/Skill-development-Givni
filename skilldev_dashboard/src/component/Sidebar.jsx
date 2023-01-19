import React from 'react'
import { BsSegmentedNav, BsImageFill } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import logo from "../images/logo.png"

const Sidebar = () => {
  return (

    <div className='h-screen flex'>
      <nav className='bg-red-200 flex items-start py-12 shadow-md relative'>
        <ul className=' flex flex-col gap-4'>
          <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsSegmentedNav className='h-4' />Nav</li>
          <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BiBookContent className='h-4' />Content</li>
          <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsImageFill className='h-4' />Image</li>
        </ul>
        <div className='absolute w-48 h-48 bg-gray-200 opacity-70 bottom-12 rounded-full -left-8 border-8 border-red-400'></div>
        <img className='absolute w-48 bg-gray-200 opacity-70 bottom-20 rounded-full ' src={logo} alt="logo" />
      </nav>
    </div>

  )
}

export default Sidebar