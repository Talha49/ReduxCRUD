import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../Features/userData';

function Navbar() {

  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch(); 

  useEffect(() => {
   dispatch(searchUser(searchData))
  },[dispatch, searchData])
 
  const alluser = useSelector((state) => state.app.users);

  return (
    <nav className="navbar">
    <div className="logo">Your Logo</div>
    <div className="nav-menu">
      <ul>
        <Link to='/'><li>Create Post</li></Link>
        <Link to='/read'><li href="#">All Posts ({alluser.length})</li></Link>
      </ul>
    </div>
    <div className="search-bar">
      <input type="text" placeholder="Search" 
      value={searchData}
      onChange={(e) => setSearchData(e.target.value)}
      />
      <button>Search</button>
    </div>
  </nav>
  );
}

export default Navbar;
