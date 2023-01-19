import React from 'react'
import NavPages from '../pages/NavPages'


const Edit = () => {

  return (

    <div className='flex text-center flex-col py-12 bg-blue-200 w-full justify-center'>
      <h1 className="relative uppercase text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border-2 before:bg-red-600 before:border-yellow-400 ">Dashboard V2.0</h1>
      <div>
        {/* use map here */}
         <NavPages/>
         
        
      </div>
    </div>

  )
}

export default Edit