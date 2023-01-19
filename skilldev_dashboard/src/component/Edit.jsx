import React from 'react'

const Edit = () => {
  return (

    <div className='flex py-12 bg-blue-200 w-full justify-center'>
      <h1 className="relative uppercase text-xl font-bold inline-block before:content-[''] before:rounded-full before:absolute before:top-7 before:left-0  before:w-full before:border-2 before:bg-red-600 before:border-yellow-400 ">Dashboard V2.0</h1>
      <div>
        {/* use map here */}
        <div className='px-16 py-2 mt-10 mx-10 '>
                                <a href={Form}><button className='rounded-md bg-green-500 hover:bg-green-600 hover:scale-x-110 hover:duration-75 px-5 py-2 m-2 text-white' id="">Add</button></a>

                                <table className='table-auto'>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                    <tr className='flex gap-96 relative bg-white rounded-md m-2 px-8 py-5 border-b-2 border-gray-700 w-full' id="">
                                        <td className='w-72'>
                                            <Select options={options} id="" />
                                        </td>
                                        <td>
                                            <a href=""><button className='rounded-md bg-blue-500 hover:bg-blue-600 hover:scale-x-110 hover:duration-75 px-5 py-2 text-white' id="">Edit</button></a>
                                        </td>
                                    </tr>
                                </table>
                            </div>

      </div>
    </div>

  )
}

export default Edit