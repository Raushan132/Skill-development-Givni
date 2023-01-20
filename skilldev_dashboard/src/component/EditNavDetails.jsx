import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const EditNavDetails = () => {

  let _id = parseInt(useParams()._id);


  const NavData = [

    {
      _id: 12,
      nav: 'Home',
      submenu: [
        {
          subnav: 'Home1'
        },
        {
          subnav: 'Home2'

        }
      ]
    },

    {
      _id: 13,
      nav: 'About',
      submenu: [
        {
          subnav: 'About1'
        },
        {
          subnav: 'About2'

        },
        {
          subnav: 'About3'
        }
      ]
    }
  ]

  const [navData, setNavData] = useState(NavData);

  const [navItem, setNavItem] = useState({});

  console.log(navData)

  useEffect(() => {
    const item = navData.find(item => item._id === _id);
    console.log(typeof (_id), _id);
    console.log(item);
    setNavItem(item);
  }, [_id, navData]);

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
        <button onClick={() => setNavData(navData.map(item => item._id === _id ? navItem : item))}>Update</button>
      </form>
    </div>
  )
}

export default EditNavDetails