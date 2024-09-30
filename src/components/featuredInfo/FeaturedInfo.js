import React from 'react';
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';

const FeaturedInfo = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className='negative' /></span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,454</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownward className='negative' /></span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,013</span>
            <span className="featuredMoneyRate">+2.1 <ArrowUpward className='positive' /></span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo