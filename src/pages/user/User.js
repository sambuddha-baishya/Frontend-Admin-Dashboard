import React from 'react';
import "./user.css";
import Profile1 from "../../images/Profile1.jpeg";
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">
            Edit User
        </h1>
        <Link to="/newuser">
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src={Profile1} alt="" className="userShowImg" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Anna Keller</span>
                    <span className="userShowUserTitle">Software Engineer</span>
                </div>
            </div>
            <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                    <PermIdentity className='userShowIcon'/>
                    <span className="userShowInfoTitle">annakell99</span>
                </div>
                <div className="userShowInfo">
                    <CalendarToday className='userShowIcon'/>
                    <span className="userShowInfoTitle">21.11.2000</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                    <PhoneAndroid className='userShowIcon'/>
                    <span className="userShowInfoTitle">+91 123 456 7890</span>
                </div>
                <div className="userShowInfo">
                    <MailOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">annakell99@gmail.com</span>
                </div>
                <div className="userShowInfo">
                    <LocationSearching className='userShowIcon'/>
                    <span className="userShowInfoTitle">Kolkata | India</span>
                </div>
            </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='annakell99' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Anna Keller' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" placeholder='annakell99@gmail.com' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="tel" placeholder='+91 123 456 7890' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='Kolkata | India' className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img className='userUpdateImg' src={Profile1} alt="" />
                <label htmlFor="file"><Publish /> Edit</label>
                <input type="file" id='file' style={{display: "none"}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
