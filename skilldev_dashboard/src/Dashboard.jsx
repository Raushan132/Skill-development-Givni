import React from 'react'
import Edit from './component/Edit'
import Sidebar from './component/Sidebar'



const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center px-24'>
                <div className='flex w-full gap-8'>
                    <Sidebar />
                    <Edit />
                </div>
            </div>
        </>
    )
}