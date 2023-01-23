import React from 'react'
import { BsSegmentedNav, BsImageFill } from "react-icons/bs";
import { BiBookContent, BiHomeHeart } from "react-icons/bi";
import logo from "../images/logo.png"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {


  let activeClassName = "bg-red-600 hover:bg-blue-600";

  return (

    <div className='h-screen flex text-white text-bold fixed'>
      <nav className='bg-red-200 flex items-start py-12 shadow-md relative'>
        <ul className=' flex flex-col gap-4'>

          <NavLink to='/' className={`flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2 hover:bg-red-600 ${(isActive) => (isActive ? activeClassName : "")}`} >
            <BiHomeHeart className='h-4' />Home
          </NavLink>

          <NavLink to='/NavPage' className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2 hover:bg-red-600'><BsSegmentedNav className='h-4' />Nav</NavLink>

          <NavLink className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2 hover:bg-red-600'><BiBookContent className='h-4' />Content</NavLink>

          <NavLink to='/ImgPage' className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2 hover:bg-red-600'><BsImageFill className='h-4' />Image</NavLink>

        </ul>
        <div className='absolute w-48 h-48 bg-gray-200 opacity-70 bottom-12 rounded-full -left-8 border-8 border-red-400'></div>
        <img className='absolute w-48 bg-gray-200 opacity-70 bottom-20 rounded-full ' src={logo} alt="logo" />
      </nav>
    </div>

  )
}

export default Sidebar