import React from 'react';
import "./sidebar.css";
import { AccountBalanceOutlined, AnalyticsOutlined, BarChartOutlined, ChatBubbleOutlineOutlined, EmailOutlined, ForumOutlined, HomeOutlined, Inventory2Outlined, PersonOutlineOutlined, Report, TrendingUpOutlined, WorkOutlineOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarComponents">
        <span className='sideBarTitles'>Dashboard</span>
        <div className="sideBarOptions">
          <Link to="/" className='link'>
            <span className='sideBarLinks active'><HomeOutlined />&nbsp;<p>Home</p></span>
          </Link>
          <span className='sideBarLinks'><BarChartOutlined />&nbsp;<p>Analytics</p></span>
          <span className='sideBarLinks'><TrendingUpOutlined />&nbsp;<p>Sales</p></span>
        </div>
        <span className='sideBarTitles'>Quick Menu</span>
        <div className="sideBarOptions">
          <Link to="/user" className='link'>
            <span className="sideBarLinks"><PersonOutlineOutlined />&nbsp;<p>User</p></span>
          </Link>
          <Link to="/products" className='link'>
            <span className="sideBarLinks"><Inventory2Outlined />&nbsp;<p>Products</p></span>
          </Link>
            <span className="sideBarLinks"><AccountBalanceOutlined />&nbsp;<p>Transactions</p></span>
            <span className="sideBarLinks"><AnalyticsOutlined />&nbsp;<p>Reports</p></span>
        </div>
        <span className='sideBarTitles'>Notifications</span>
        <div className="sideBarOptions">
            <span className="sideBarLinks"><EmailOutlined />&nbsp;<p>Mail</p></span>
            <span className="sideBarLinks"><ForumOutlined />&nbsp;<p>Feedback</p></span>
            <span className="sideBarLinks"><ChatBubbleOutlineOutlined />&nbsp;<p>Messages</p></span>
        </div>
        <span className='sideBarTitles'>Staffs</span>
        <div className="sideBarOptions">
            <span className="sideBarLinks"><WorkOutlineOutlined />&nbsp;<p>Manage</p></span>
            <span className="sideBarLinks"><BarChartOutlined />&nbsp;<p>Analytics</p></span>
            <span className="sideBarLinks"><Report />&nbsp;<p>Report</p></span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
