import React from 'react';
import './topbar.css';
import { Language, NotificationsNoneOutlined, Settings } from '@mui/icons-material';
import adminProfile from '../../images/AdminProfile.jpeg';

const Topbar = () => {
  return (
    <div className='topBar'>
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className='logo'>nixelv</span>
        </div>
        <div className="topRight">
          <div className="topBarIcons">
            <NotificationsNoneOutlined />
            <span className='topIconBadge'>2</span>
          </div>
          <div className="topBarIcons">
            <Language />
          </div>
          <div className="topBarIcons">
            <Settings />
          </div>
          <img src={adminProfile} alt="" className='profilePic' />
        </div>
      </div>
    </div>
  )
}

export default Topbar
