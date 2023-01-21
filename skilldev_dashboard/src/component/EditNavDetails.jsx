import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const EditNavDetails = () => {

  // let _id = parseInt(useParams()._id);
  let _id = useParams()._id;

  // console.log(_id._id);



  // const NavData = [

  //   {
  //     _id: 12,
  //     nav: 'Home',
  //     submenu: [
  //       {
  //         subnav: 'Home1'
  //       },
  //       {
  //         subnav: 'Home2'

  //       }
  //     ]
  //   },

  //   {
  //     _id: 13,
  //     nav: 'About',
  //     submenu: [
  //       {
  //         subnav: 'About1'
  //       },
  //       {
  //         subnav: 'About2'

  //       },
  //       {
  //         subnav: 'About3'
  //       }
  //     ]
  //   }
  // ]

  const [navData, setNavData] = useState([]);

  const [navItem, setNavItem] = useState({});
  console.log(_id, typeof (_id))

  //   useEffect(() => {
  //     axios.get(`http://192.168.1.12:8081/getheaderid/${_id}`).then((result) => {
  //         console.log("useffect",result.data);
  //         setNavData(result.data);
  //     })

  // }, [_id])


  useEffect(() => {
    axios.get('http://192.168.1.12:8082/getTest').then((result) => {
      console.log("data from getheader", result.data);
      setNavData(result.data);
    })

  }, [])



  console.log("This is navdata from ednavde", navData)

  // const Navitemfunction=()=>{

  useEffect(() => {
    if (navData.length > 0) {
      const item = navData.find(item => item._id === _id);
      console.log("useeffect1 filtered item", item)
      console.log(typeof (_id), _id);
      // console.log(item);
      setNavItem(item);
    }
  }, [_id, navData]);

  // }




  const handleUpdate = (e) => {
    // e.preventDefault();
    // e.preventDefault();

    setNavData(navData.map(item => item._id === _id ? navItem : item));
    console.log(navItem);
    // let puturl = `http://192.168.1.12:8082/updateData/${_id}`
    // console.log()
    // axios.put(puturl, navItem);
    console.log(_id)
    axios.put(`http://192.168.1.12:8082/updateData/${_id}`, navItem)
      .then(res => console.log("put", res.data));

  }


  console.log("navitem", navItem);

  return (
    <div>

      <form>

        <label>Nav:</label>
        <input type="text" value={navItem.nav} onChange={(e) => setNavItem({
          ...navItem,
          nav: e.target.value
        })} />

        {navItem.submenu && navItem.submenu.map((subnav, index) => (

          <div key={index}>
            <label>Subnav {index + 1}:</label>
            <input type="text" value={subnav.subnav} onChange={(e) => setNavItem({ ...navItem, submenu: navItem.submenu.map((sub, i) => i === index ? { ...sub, subnav: e.target.value } : sub) })} />
          </div>
        ))}
        <input type="button" onClick={() => handleUpdate()} value="Update" />
      </form>
    </div>
  )
}

export default EditNavDetails