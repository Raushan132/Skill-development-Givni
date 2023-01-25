import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';




const UpdateImageForm = () => {

    let _id = useParams()._id;

    console.log(_id);

    const url = `http://192.168.1.19:8084/uploadImage/${_id}`;

    const [uploadedFile, setUploadedFile] = useState('');
    // const [errormsg, setErrorMsg] = useState('')
    

    const changeImage = (event) => {
        // console.log(event.target.files[0]);
        // setState({uploadedFile:event.target.files[0]});

        // setUploadedFile({userImage:event.target.files[0],id: _id});
        setUploadedFile(event.target.files[0]);

    }

    console.log(uploadedFile)

    const UpdateHandler = (e) => {
        e.preventDefault();
        // crete object of form data
        const formData = new FormData();

        formData.append('userImage',uploadedFile);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        //update-profile
        axios.post(url,formData,config)
            .then((res) => {

                alert("File Uploded Hurray!")
            }).catch((error) => {
                
               
            })
    
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
                            <input type="file" name='userImage' onChange={changeImage} accept="image/x-png , image/jpeg" />
                            <button onClick={UpdateHandler} className='bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline hover:scale-105 hover:duration-75'>Update</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default UpdateImageForm;