import React from 'react';
import "./widgetSmall.css";
import Profile1 from "../../images/Profile1.jpeg";
import Profile2 from "../../images/Profile2.jpeg";
import Profile3 from "../../images/Profile3.jpeg";
import Profile5 from "../../images/Profile5.jpeg";
import Profile7 from "../../images/Profile7.jpeg";
import { Visibility } from '@mui/icons-material';

const WidgetSmall = () => {
  return (
    <div className='widgetSmall'>
      <span className="widgetSmallTitle">Newly Joined Members</span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <div className="widgetSmallUserDetails">
            <img src={Profile1} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUsername">Anna Keller</span>
              <span className="widgetSmallUserTitle">Software Engineer</span>
            </div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='visibility' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <div className="widgetSmallUserDetails">
            <img src={Profile2} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUsername">John Doe</span>
              <span className="widgetSmallUserTitle">Manager</span>
            </div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='visibility' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <div className="widgetSmallUserDetails">
            <img src={Profile3} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUsername">Sophie Scott</span>
              <span className="widgetSmallUserTitle">Technical Lead</span>
            </div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='visibility' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <div className="widgetSmallUserDetails">
            <img src={Profile5} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUsername">Jacob Adams</span>
              <span className="widgetSmallUserTitle">Chief Executive Officer</span>
            </div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='visibility' />
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <div className="widgetSmallUserDetails">
            <img src={Profile7} alt="" className="widgetSmallImg" />
            <div className="widgetSmallUserInfo">
              <span className="widgetSmallUsername">Aria Garcia</span>
              <span className="widgetSmallUserTitle">Web Designer</span>
            </div>
          </div>
          <button className="widgetSmallButton">
            <Visibility className='visibility' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSmall
