import React from 'react'
// import Edit from './component/Header'
// import Form from './component/Form'
import Sidebar from './component/Sidebar'
import { Routes, Route } from 'react-router-dom'
import EditNavDetails from './component/EditNavDetails'
import NavPage from './pages/NavPage'
import HomePage from './pages/HomePage'
import UpdateImage from './component/UpdateImage';

// import PopupForm from './component/PopupForm'





const Dashboard = () => {
    return (
        <>
            <div className='min-h-screen flex  px-24'>
                <div className='flex w-full gap-8'>
                    <Sidebar />
                    <div className='ml-28'>
                    <Routes>

                        <Route path='/navpage' element={<NavPage />} />
                        <Route path='navpage/Edit/:_id' element={<EditNavDetails />} />
                        <Route exact path='/' element={<HomePage />} />
                        <Route exact path='/ImgPage' element={<UpdateImage/>} />
                        

                    </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;