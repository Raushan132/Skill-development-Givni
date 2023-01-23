import React, { useState } from 'react';
import axios from 'axios';




const UpdateImageForm = () => {

    const url = 'http://192.168.1.19:8084/uploadImage';

    const [uploadedFile, setState] = useState(null);
    

    const changeImage = (event) => {
        console.log(event.target.files[0]);
        setState({uploadedFile:event.target.files[0]});
    }

    const UpdateHandler = (e) => {
        e.preventDefault();
        // crete object of form data
        const formData = new FormData();
        formData.append('userImage',uploadedFile);

        //update-profile
        axios.post(url,formData,{
            headers:{
                "content-type": "application/json"
            }
            
        }).then(res=>{
            console.log(res.data);
        //    setState({profileImage:res.data.results.uploadedFile});
        })
        .catch(err=>console.log("not connect"));


    }
    

    return (
        <div>
            <div className='mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8'>
                <div className="grid-item">
                    <div>
                        <img src="" alt="images" />
                    </div>
                    <div className=''>
                        <form action="">
                            <input type="file" name='userImage' onChange={changeImage} />
                            <button onClick={UpdateHandler} className='bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline hover:scale-105 hover:duration-75'>Update</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UpdateImageForm;