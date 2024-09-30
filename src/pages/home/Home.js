import React from 'react';
import "./home.css";
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import {userData} from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title={"User Analytics"} dataKey={"Active User"} grid />
      <div className="homeWidget">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  )
}

export default Home
