import React, { useState } from 'react';
import Axios from 'axios';
import { ImCross } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PopupForm = () => {

    // sending data to this url
    const url = 'http://192.168.1.21:8084/addNav';

    // adding data function
    const [data, setData] = useState({ menu: '' })
    const handleData = (e) => {
        const newData = { ...data }
        newData[e.target.id] = e.target.value;
        setData(newData)
        console.log(newData);
    }

    // onclick effect function
    const handleAdd = (e) => {
        e.preventDefault();
        console.log(data);
        
        Axios.post(url, { nav: data.menu, submenu: [{ subnav: "" }] }).then(res => { 
            console.log(res.data);
            message(res.data) 
        }).catch(err => { console.log('unsuccess'); })
    }

    // useEffect(() => {
    //     alert('data added successfully!');
    // });


    /* for popup */
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    };


    /* message */
    const message = (Test) => {
        // alert('Data added successfully!');
        if(Test){
            // console.log('here');
            toast.success('Data added successfully!', {
                position: "top-center"
            });
        }else{
            toast.error('Data Not added!', {
                position: "top-center"
            });
        }
        
    }

    return (
        <>
            <button onClick={toggleModal} className='text-xl bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline'>Add</button>
            {/* popup */}
            {modal && (
                <div>
                    <div className='absolute top-10 left-1/2 w-full max-w-xs my-40 mx-auto bg-red-100 shadow-xl rounded-md'>
                        {/* close buton */}
                        <button onClick={toggleModal} className='text-md bg-red-100 text-gray-700 hover:text-red-500 hover:scale-90 hover:duration-75 py-3 px-3 rounded focus:outline-none focus:shadow-outline'> <ImCross /> </button>
                        <form className='px-8 pb-8' onSubmit={handleAdd}>

                            <h1 className="uppercase text-center text-lg text-gray-600 pb-1 mb-2 border-b-2 border-gray-400">Add Data Here</h1>
                            <div className='mb-4"'>
                                <label className='block text-gray-700 text-sm font-bold mb-2'>Navbar</label>
                                <input type="text" id='menu' value={data.menu} onChange={handleData} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4' placeholder='Enter data here' />
                            </div>

                            <div className="flex items-center justify-between">
                                <button  className='text-xl w-full bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline hover:scale-105 hover:duration-75'>Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </>
    )
}

export default PopupForm