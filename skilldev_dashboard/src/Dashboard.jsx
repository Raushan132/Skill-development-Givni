import React from 'react'
import Edit from './component/Edit'
import Sidebar from './component/Sidebar'



const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center px-24'>
                <div className='flex w-full gap-8'>
                    <div className='h-screen flex'>
                        <nav className='bg-red-200 flex items-start py-12 shadow-md relative'>
                            <ul className=' flex flex-col gap-4'>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsSegmentedNav className='h-4'/>Nav</li>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BiBookContent className='h-4'/>Content</li>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsImageFill className='h-4'/>Image</li>
                            </ul>
                            <div className='absolute w-48 h-48 bg-gray-200 opacity-70 bottom-12 rounded-full -left-8 border-8 border border-red-400'></div>
                            <img className='absolute w-48 bg-gray-200 opacity-70 bottom-20 rounded-full ' src={logo} alt="logo" />
                        </nav>
                    </div>
                    {/* Nav Container */}
                    <div className='flex py-12 bg-blue-200 w-full justify-center'>
                        <h1 className="relative uppercase text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border before:border-2 before:bg-red-600 before:border-yellow-400 ">Dashboard V2.0</h1>
                        <div>
                            {/* use map here */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard