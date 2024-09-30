import React from 'react';
import "./newUser.css";
import { Publish } from '@mui/icons-material';
import NoProfile from "../../images/NoProfile.png";

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder='Your username' />
        </div>
        <div className="newUserItem">
            <label>Full Name</label>
            <input type="text" placeholder='Your fullname' />
        </div>
        <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder='Your email' />
        </div>
        <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder='Your password' />
        </div>
        <div className="newUserItem">
            <label>Phone</label>
            <input type="tel" placeholder='Your phone number' />
        </div>
        <div className="newUserItem">
            <label>Address</label>
            <input type="email" placeholder='City | Country' />
        </div>
        <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
                <input type="radio" name='gender' id='male' value="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name='gender' id='female' value="female" />
                <label htmlFor="female">Female</label>
                <input type="radio" name='gender' id='other' value="other" />
                <label htmlFor="other">Other</label>
            </div>
        </div>
        <div className="newUserItem">
            <label>Active</label>
            <select className='newUserSelect' name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <div className="newUserProfileImg">
            <img src={NoProfile} alt="" />
            <label htmlFor="file"><Publish /> Edit</label>
            <input type="file" id='file' style={{display: "none"}} />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}

export default NewUser
