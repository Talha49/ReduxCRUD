import React from 'react'
import './custom.css'
import { useSelector } from 'react-redux'
const CustomModal = ({id, setPopup}) => {
 const alluser = useSelector((state) => state.app.users);

 const singleuser = alluser.filter((ele) => ele.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setPopup(false)}> Close</button>
        <h2>{singleuser[0].name}</h2>
        <h3>{singleuser[0].email}</h3>
        <h4>{singleuser[0].age}</h4>
        <h5>{singleuser[0].gender}</h5>
      </div>
    </div>
  )
}

export default CustomModal