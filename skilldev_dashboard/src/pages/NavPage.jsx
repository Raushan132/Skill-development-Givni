import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import HeadTitle from '../component/HeadTitle'



const NavPages = () => {

    const NavData = [

        {
            _id: 12,
            nav: 'Home',
            submenu: [
                {
                    subnav: 'Home1'
                },
                {
                    subnav: 'Home2'

                }
            ]
        },
        {
            _id: 13,
            nav: 'About',
            submenu: [
                {
                    subnav: 'About1'
                },
                {
                    subnav: 'About2'

                },
                {
                    subnav: 'About3'

                }
            ]
        }
    ]



    const [data, setData] = useState(NavData)



    // useEffect(() => {
    //     axios.get('http://192.168.1.12:8081/api/header').then((result) => {
    //         console.log(result.data);
    //         setData(result.data);
    //     })

    // }, [])


    console.log(data)
    return (
        <div className='flex text-center flex-col py-12 bg-blue-200 w-full'>
            <HeadTitle head="Nav" />

            <div className='px-16 py-2 mt-10 mx-10 '>
                <Link className='flex justify-start'>
                    <button className='rounded-md bg-green-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white' id="">
                        Add</button>
                </Link>

                <div>
                    {

                        data.map((navbar) => {
                            return (
                                <div className='flex flex-col' key={navbar._id}>
                                    <div className='flex flex-col-reverse'>
                                        <Link to={"Edit/" + navbar._id} className=''> Edit </Link>
                                    </div>
                                    <h3>{navbar.nav}</h3>

                                    <ul className='pl-12 pb-12'>
                                        {

                                            navbar.submenu?.map((child) => {
                                                return (
                                                    <li>{child.subnav}</li>
                                                )
                                            })
                                        }


                                    </ul>
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