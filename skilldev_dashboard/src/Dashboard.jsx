import React from 'react'
import Edit from './component/Edit'
// import Form from './component/Form'
import Sidebar from './component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import EditDetails from './component/EditDetails'
import NavPages from './pages/NavPages'



const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex justify-center items-center px-24'>
                <div className='flex w-full gap-8'>
                    <Sidebar />
                    <Routes>
                        <Route to='/edit' element={<NavPages />} />
                        <Route to='/edit:_id' element={<EditDetails />} />
                    </Routes>
                    
                </div>
            </div>
        </>
    )
}
export default Dashboard;