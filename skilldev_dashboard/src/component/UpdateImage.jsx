import React, { useEffect, useState } from 'react';
// import Image from '../images/UpdateImage.jpg';
import axios from 'axios';

const UpdateImage = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://192.168.1.19:8084/getImages').then((result) => {
            // console.log(result.data);
            setData(result.data);
        })

    }, [])

    return (
        <>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-5'>

                {data.map(images => {
                    return (

                        <div>
                            <div className='h-52 w-72 group relative items-center justify-center overflow-hidden cursor-pointer '>
                                <div className='h-52 w-72'>
                                    <input type="hidden" value={images._id} />
                                    <img src={"../../assets/img" + images.img} alt={images.alt} className='rounded-md h-full w-full object-cover' />
                                </div>

                                <div className='relative inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[100%] group-hover:-translate-y-32 transition-all ease-in-out'>
                                    <button className=' h-16 w-16 bg-cyan-500 text-white font-bold rounded-full focus:outline-none focus:shadow-outline hover:scale-105 hover:duration-75 shadow-2xl scale-75 duration-150'>Edit</button>
                                </div>
                            </div>

                            <div>
                                <h1>  </h1>
                            </div>
                        </div>

                    )
                })}
            </div>
        </>
    )
}

export default UpdateImage


