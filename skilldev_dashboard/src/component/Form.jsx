import React, { useState } from 'react';
import Axios from 'axios';
import { BiAddToQueue } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';

const Form = () => {

    // sending data to this url
    const url = 'http://192.168.1.12:8081/api/header'

    // adding data function
    const [data, setData] = useState({ menu: '', submenu: '' })
    const handleData = (e,i) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
        // console.log(newData);


        // for new input field
        // const inputdata = [...fieldAdd]
        // inputdata[i] = e.target.value;
        // setFieldAdd(inputdata)

        // console.log(fieldAdd, "data.");
    }

    // onclick effect function
    const handleAdd = (e) => {
        e.preventDefault();
        console.log(data);
        Axios.post(url, { menu: data.menu, submenu: data.submenu }).then(res => { console.log(res.data); }).catch(err => { console.log('unsuccess'); })
    }



    // Adding new field
    const [fieldAdd, setFieldAdd] = useState([]);
    const handleFieldAdd = () => {
        const newFieldAdd=[...fieldAdd,[]]
        setFieldAdd(newFieldAdd)
    }
    // Deleting new field
    const handleDelete = (i) => {
        const fieldDelete = [...fieldAdd]
        fieldDelete.splice(i,1)
        setFieldAdd(fieldDelete)
    }

    return (
        <div className='w-full max-w-xs my-40 mx-auto'>
            <form className=' bg-red-100 shadow-xl rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleAdd}>
                <h1 className="uppercase text-center text-lg text-gray-600 pb-1 mb-2 border-b-2 border-gray-400">Add Data Here</h1>
                <div className='mb-4"'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Menu</label>
                    <input type="text" id='menu' value={data.menu} onChange={handleData} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' placeholder='Enter data here' />
                </div>

                {/* <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Submenu</label>
                    <input type="text" id='submenu' value={data.submenu} onChange={handleData} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter data here' />
                </div> */}

                <div className='flex justify-between'>
                    <p className='text-sm pt-1'> Add More Submenu 👉 </p>

                    <div className="flex items-end justify-end">
                        <button onClick={()=>handleFieldAdd()} className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mb-4'> <BiAddToQueue /> </button>
                    </div>
                </div>

                {/* Map function for adding new field */}
                {fieldAdd.map((data, i) => {
                        return(
                            <div className='flex justify-between'>
                            <input type="text" id='submenu' value={data.submenu} onChange={handleData} className='shadow appearance-none border rounded max-w-fit py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' placeholder='Enter data here' />
                            
                            <button className=' bg-red-400 hover:bg-red-500 text-white mb-4 px-2 rounded-md' onClick={()=>handleDelete(i)}> <RxCross2/> </button>
                        </div>
                        )
                    })}

                <div className="flex items-center justify-between">
                    <button className='text-xl w-full bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline'>Add</button>
                </div>
            </form>
        </div>
    )
}

// export default Form