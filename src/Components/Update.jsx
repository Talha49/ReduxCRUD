import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../Features/userData';

const Update = () => {
  
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
 

 const {users, loading} = useSelector((state) => state.app);
 const [update, setUpdate] = useState();

 useEffect(() => {
   
if(id){
  const singleUser = users.filter((ele) => ele.id === id);
  setUpdate(singleUser[0]); 
}
 },[id, users])

 const handleUpdate =(e)=> {
  e.preventDefault();
  dispatch(updateUser(update))
  navigate('/read')
 }
 const newData =(e) => {
  setUpdate({...update, [e.target.name]: e.target.value});

 }

 if(loading){
  return <h2>Loading........./</h2>
 }
  return (
    <div className="form-container">
      <form className="user-form"  onSubmit={handleUpdate}>
        <h2>Update Information Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={update && update.name}
            onChange={newData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={update && update.email}
            onChange={newData}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={update && update.age}
            onChange={newData}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={update && update.gender === 'Male' }
              onChange={newData}
            />
            Male
          </label>
          <label>
            <input
           type="radio"
           name="gender"
           value="Female"
           checked={update && update.gender === 'Female' }
           onChange={newData}
            />
            Female
          </label>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
  
}

export default Update