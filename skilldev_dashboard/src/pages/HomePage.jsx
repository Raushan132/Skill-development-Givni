import React from 'react'
import HeadTitle from '../component/HeadTitle'


const HomePage = () => {
    return (
        <div className='w-full min-h-screen bg-blue-200'>
            <div className='flex text-center flex-col py-12  '>
                <HeadTitle head="Home" />

                <div>
                    <h1 className='text-4xl font-bold'>Home Page</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage