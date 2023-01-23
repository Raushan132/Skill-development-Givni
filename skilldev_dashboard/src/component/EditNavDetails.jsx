import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';


const EditNavDetails = () => {

  // let _id = parseInt(useParams()._id);
  // console.log(_id._id);

  let _id = useParams()._id;

  const navigate = useNavigate();






  const [navData, setNavData] = useState([]);

  const [navItem, setNavItem] = useState({});
  console.log(_id, typeof (_id))




  useEffect(() => {
    axios.get('http://192.168.1.19:8084/getTest').then((result) => {
      console.log("data from getheader", result.data);
      setNavData(result.data);
    })

  }, [])



  console.log("This is navdata from ednavde", navData)


  useEffect(() => {
    if (navData.length > 0) {
      const item = navData.find(item => item._id === _id);
      console.log("useeffect1 filtered item", item)
      console.log(typeof (_id), _id);
      setNavItem(item);
    }
  }, [_id, navData]);

  // }

  const [updatemsg, setUpdatemsg] = useState("")

//  let updatemsg=""


  const handleUpdate = async (e) => {

    e.preventDefault();
    try {
      await axios.put(`http://192.168.1.19:8084/updateData/${_id}`, navItem)
        .then(res => {
          let msg = (res.data) ? <h1 className='bg-gray-200 text-green-800 px-4 py-2 font-bold'> <span className='animate-spin scale-150'>🎊</span> Updated Sucessfully</h1> : "error";
          setUpdatemsg(msg);
          console.log("put", res.data, updatemsg)});
          setNavData(navData.map(item => item._id === _id ? navItem : item));
    } 
    catch (err) {
      console.log(err)
    }

  }

  const handleDelete = async (e) => {

    e.preventDefault();
    try {
      await axios.delete(`http://192.168.1.19:8084/deletenav/${_id}`, navItem)
        .then(res => { 
          let test = (res.data)? navigate("/navPage"):"false";
          console.log("delete", res.data, test)
          
        });
      setNavData(navData.map(item => item._id === _id ? navItem : item));
    }
    catch (err) {
      console.log(err)
    }

  }

  const removeSubnav = (index) => {
    setNavItem({
      ...navItem,
      submenu: navItem.submenu.filter((sub, i) => i !== index)
    });
  }

  const addSubnav = () => {
    setNavItem({
      ...navItem,
      submenu: [...navItem.submenu, { subnav: '' }]
    });
  }

  

  return (
    <div className='flex flex-col gap-10 min-h-screen justify-center items-center w-full'>
      <div className=''>{updatemsg}</div>
      <form className='flex gap-4 flex-col bg-gray-300 py-12 px-8' onSubmit={handleUpdate}>
        <ul className='flex gap-2 items-center'>
          <li> <label>Nav:</label></li>
          <li><input  onFocus={()=>setUpdatemsg("Want to change Nav...")}   className='px-2 py-1' type="text" value={navItem.nav} onChange={(e) => setNavItem({
            ...navItem,
            nav: e.target.value
          })} /> </li>

          {
          
          (navItem.submenu) && (navItem.submenu['length'] === 0)  && 
          (<li><input  onFocus={()=>setUpdatemsg("Want to change Nav Href...")}   className='px-2 py-1' type="text" value={navItem.href} onChange={(e) => setNavItem({
            ...navItem,
            href: e.target.value
          })} /> </li>)
          
          }

          {/* {console.log("submenu",navItem.submenu && navItem.submenu['length'])} */}

        </ul>
        {navItem.submenu && navItem.submenu.map((subnav, index) => (

          <div className='flex flex-col gap-4 ' key={index}>
            <ul className='flex gap-4 justify-center items-center'>

              <label>Subnav {index + 1}:</label>
              <div className='flex gap-4 items-center'>
                <input onFocus={()=>setUpdatemsg(`Want to change Subnav ${index+1}... 😮‍💨`)}  className='px-2 py-1'  type="text" value={subnav.subnav} onChange={(e) => setNavItem({ ...navItem, submenu: navItem.submenu.map((sub, i) => i === index ? { ...sub, subnav: e.target.value } : sub) })} />
                <input onFocus={()=>setUpdatemsg(`Want to change href ${index+1}... 😮‍💨`)}  className='px-2 py-1'  type="text" value={subnav.href} onChange={(e) => setNavItem({ ...navItem, submenu: navItem.submenu.map((sub, i) => i === index ? { ...sub, href: e.target.value } : sub) })} />
                
                <button onPointerEnter={console.log("removingg")} className='bg-red-400 px-4 py-2 hover:bg-red-600 hover:text-white' onClick={() => removeSubnav(index)}>Remove</button>
              </div>
            </ul>

          </div>
        ))}

        <div className='flex justify-center gap-12'>
        <button className='bg-green-400 px-4 py-2 hover:bg-green-600' onClick={addSubnav}>Add Subnav</button>
        <button className='bg-green-400 px-4 py-2 hover:bg-green-600' type="submit"> Update </button>
        </div>
        <button className='bg-red-400 px-4 py-2 hover:bg-red-600' onClick={handleDelete} > Delete </button>

      </form >
    </div >
  )
}

export default EditNavDetails