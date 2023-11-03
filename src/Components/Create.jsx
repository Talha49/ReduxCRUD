import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {createUser} from '../Features/userData' 
import {  useNavigate } from 'react-router-dom';

const Create = () => {

  const [user, setUser] = useState({});

const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const getuser = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
    
  }

  const handSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    console.log(user)
    navigate("/read")
  }

  return (
    <div className="form-container">
      <form className="user-form" onSubmit={handSubmit}>
        <h2>User Information Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={getuser}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={getuser}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={getuser}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={getuser}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={getuser}
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

export default Create