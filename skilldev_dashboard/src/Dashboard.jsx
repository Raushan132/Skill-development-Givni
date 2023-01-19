import React from 'react'
import Edit from './component/Edit'
// import Form from './component/Form'
import Sidebar from './component/Sidebar'

const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center px-24'>
                <div className='flex w-full gap-8'>
                    <Sidebar />
                    <Edit />
                    {/* <Form/> */}
                </div>
            </div>
        </>
    )
}
export default Dashboard;