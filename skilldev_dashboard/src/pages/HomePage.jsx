import React from 'react'
import HeadTitle from '../component/HeadTitle'
import csimg from '../images/customer-support.jpg'


const HomePage = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='flex text-center flex-col py-12  '>
                <HeadTitle head="Home" />

                <div>
                    {/* <h1 className='text-4xl font-bold'>Home Page</h1> */}
                    <div className='grid grid-cols-2 gap-4 px-8 py-8'>
                        <div className='flex justify-center items-center text-3xl'>
                        <h1>Skill Development Admin Panel</h1>
                        </div>
                        <img src={csimg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage