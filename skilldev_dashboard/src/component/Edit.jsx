import React, { useEffect, useState } from 'react'
// import Select from 'react-dropdown-select';
import { NavLink } from "react-router-dom";
import axios from 'axios'

const Edit = () => {

    // const options = [
    //     {
    //         value: 1,
    //         label: "Home"
    //     },
    //     {
    //         value: 2,
    //         label: "Home1"
    //     },
    //     {
    //         value: 3,
    //         label: "Home2"
    //     }
    // ];

    const [home, setHome] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.12:8081/api/header').then((result) => {
            console.log(result.data)
            setHome(result.data)
        }).catch((err) => {

        });

    }, [])

    return (

        <div className='flex flex-col text-center py-12 bg-blue-200 w-full justify-center'>
            <h1 className="relative uppercase text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border-2 before:bg-red-600 before:border-yellow-400 ">Dashboard V2.0</h1>
            <div>
                {/* use map here */}

                {

                    home.map((navbar) => {
                        return (
                            <>
                            <div className='flex'>
                            <h3>{navbar.nav}</h3>
                                <ul className='flex gap-4 list-none'>
                                {
                            navbar.submenu?.map((subnav) => {
                                return (
                                    <li >  {subnav.subnav} </li>
                                )
                            })}
                                </ul>
                            </div>
                            


                                
                            </>
                        )
                    })
                }
                {/* <div className='px-16 py-2 mt-10 mx-10 '>
                    <button className='rounded-md bg-green-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white' id="">Add</button>

                    <table className='table-auto'>
                        <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                            <td className='w-72'>
                                <Select options={options} id="" />
                            </td>
                            <td>
                                <NavLink to="/form"><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></NavLink>
                            </td>
                        </tr>
                    </table>
                </div> */}

            </div>
        </div>

    )
}

export default Edit