import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showuser } from '../Features/userData'
import { Link } from 'react-router-dom'
import { deleteuser } from '../Features/userData'
import CustomModal from './CustomModal'

const Read = () => {

 const dispatch = useDispatch();

  const {users, loading, searchData} = useSelector((state) => state.app);
  const [id, setId] = useState();
  const [popup, setPopup] = useState(false);
  const [radioData, setRadioData] = useState("");


 useEffect(() => {
 dispatch(showuser())
 },[dispatch]) 


 if(loading){
  return <h2>Loadin/......../</h2>
 }


  return (
    <div>
      <div>
        <h2>ALL DATA</h2>
        <div className="form-groups">
        <label>
            <input
              type="radio"
              name="gender"
              
              checked={radioData === ""}
              onChange={() => setRadioData("")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={radioData === "Male"}
              onChange={() => setRadioData("Male")}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={radioData === "Female"}
              onChange={() => setRadioData("Female")}
            />
            Female
          </label>
          </div>
         {popup && (<CustomModal id={id}  setPopup={setPopup} />)}
      </div>
    <div className="card-grid">
            {users &&
            users.filter((user) => {
              if(searchData.length === 0){
                return user;
              }
              else{
                return user.name.toLowerCase().includes(searchData.toLowerCase()) 
                
              }
            }) 
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((user) => (
              <div key={user.id} className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle">{user.email}</h6>
                <p className="card-text">{user.age}</p>
                <p className="card-text">{user.gender}</p>
                <button className="card-link"
                onClick={() => [setId(user.id), setPopup(true)]} 
                >View</button>
                <Link to={`/update/${user.id}`} className="card-link">
                  Edit
                </Link>
                <Link href='/' onClick={() => dispatch(deleteuser(user.id))} className="card-link">
                  Delete
                </Link>
              </div>
            </div>
            ))

            }
      
        </div>
        </div>
   
  )
}

export default Read