import React from 'react'
// import Edit from './component/Header'
// import Form from './component/Form'
import Sidebar from './component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import EditNavDetails from './component/EditNavDetails'
import NavPage from './pages/NavPage'
import HomePage from './pages/HomePage'



const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex  px-24'>
                <div className='flex w-full gap-8'>
                    <Sidebar />
                    <Routes>
                        <Route path='/navpage' element={<NavPage />} />
                        <Route path='navpage/Edit/:_id' element={<EditNavDetails />} />
                        <Route exact path='/' element={<HomePage />} />
                    </Routes>

                </div>
            </div>
        </>
    )
}
export default Dashboard;