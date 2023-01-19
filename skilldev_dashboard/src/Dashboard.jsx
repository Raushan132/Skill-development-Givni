import React from 'react'
// import Edit from './component/Edit'
// import Sidebar from './component/Sidebar'
import { BsSegmentedNav, BsImageFill } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import logo from "./images/logo.png"
import Select from "react-dropdown-select";
import Form from "./component/Form";


const Dashboard = () => {

    const options = [
        {
            value: 1,
            label: "Home"
        },
        {
            value: 2,
            label: "Home1"
        },
        {
            value: 3,
            label: "Home2"
        }
    ];

    return (
        <>
            {/* <Edit/>
        <Sidebar/> */}
            <div className='min-h-screen flex justify-center items-center px-24'>

                <div className='flex w-full gap-8'>
                    <div className='h-screen flex'>
                        <nav className='bg-red-200 flex items-start py-12 shadow-md relative'>
                            <ul className=' flex flex-col gap-4'>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsSegmentedNav className='h-4' />Nav</li>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BiBookContent className='h-4' />Content</li>
                                <li className='flex items-center gap-2 cursor-pointer bg-red-400 px-6 py-2'><BsImageFill className='h-4' />Image</li>
                            </ul>
                            <div className='absolute w-48 h-48 bg-gray-200 opacity-70 bottom-12 rounded-full -left-8 border-8 border border-red-400'></div>
                            <img className='absolute w-48 bg-gray-200 opacity-70 bottom-20 rounded-full ' src={logo} alt="logo" />
                        </nav>
                    </div>
                    {/* Nav Container */}
                    <div className='flex py-12 bg-blue-200 w-full justify-center'>
                        <h1 className="absolute uppercase tracking-widest text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border before:bg-red-600 before:border-green-400 ">Navbar</h1>
                        <div>
                            {/* use map here */}


                            <div className='px-16 py-2 mt-10 mx-10 '>
                                <a href={Form}><button className='rounded-md bg-green-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white' id="">Add</button></a>

                                <table className='table-auto'>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard