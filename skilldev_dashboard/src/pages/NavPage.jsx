import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import HeadTitle from '../component/HeadTitle'



const NavPages = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.1.21:8084/getTest').then((result) => {
            // console.log(result.data);
            setData(result.data);
        })

    }, [])


    // console.log(data)
    return (
        <div className='flex text-center flex-col py-12 bg-blue-200 w-full'>
            <HeadTitle head="Nav" />

            <div className='px-16 py-2 mt-10 mx-10 flex flex-col '>
                <Link className='flex justify-start'>
                    <button className='rounded-md bg-green-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white' id="">
                        Add</button>
                </Link>

                <div class="grid md:grid-cols-3 grid-cols-1  gap-5 px-4 py-4">
                    {

                        data.map((navbar) => {
                            return (
                                <div className='flex flex-col bg-gray-300' key={navbar._id}>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex'>
                                            <Link to={"Edit/" + navbar._id} className='rounded-md bg-red-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white'> Edit </Link>
                                        </div>
                                        <div className=''>
                                            <h3> {navbar.nav}</h3>

                                            <ul className='pl-16 pb-12'>
                                                {

                                                    navbar.submenu?.map((child) => {
                                                        return (
                                                            <li>{child.subnav}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>


            </div>
        </div>
    )
}

export default NavPages