import React from 'react';
import "./widgetLarge.css";
import Profile1 from "../../images/Profile1.jpeg";
import Profile2 from "../../images/Profile2.jpeg";
import Profile3 from "../../images/Profile3.jpeg";
import Profile5 from "../../images/Profile5.jpeg";
import Profile7 from "../../images/Profile7.jpeg";

const WidgetLarge = () => {
  const Button = ({type}) => {
    return <button className={'widgetLargeButton ' + type}>{type}</button>;
  }
  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className='transactionTable'>
        <thead>
          <tr>
            <th className='transactionHeader' scope='column'>Customer</th>
            <th className='transactionHeader' scope='column'>Date</th>
            <th className='transactionHeader' scope='column'>Amount</th>
            <th className='transactionHeader' scope='column'>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name">
              <img src={Profile2} alt="" />
              <span className='username'>John Doe</span>
            </td>
            <td className='date'>19 September, 2024</td>
            <td className="amount">$149</td>
            <td className='status'><Button type="Approved" /></td>
          </tr>
          <tr>
            <td className="name">
              <img src={Profile7} alt="" />
              <span className='username'>Aria Garcia</span>
            </td>
            <td className='date'>17 September, 2024</td>
            <td className="amount">$149</td>
            <td className='status'><Button type="Rejected" /></td>
          </tr>
          <tr>
            <td className="name">
              <img src={Profile3} alt="" />
              <span className='username'>Sophie Scott</span>
            </td>
            <td className='date'>14 September, 2024</td>
            <td className="amount">$149</td>
            <td className='status'><Button type="Pending" /></td>
          </tr>
          <tr>
            <td className="name">
              <img src={Profile1} alt="" />
              <span className='username'>Anna Keller</span>
            </td>
            <td className='date'>10 September, 2024</td>
            <td className="amount">$149</td>
            <td className='status'><Button type="Approved" /></td>
          </tr>
          <tr>
          <td className="name">
            <img src={Profile5} alt="" />
            <span className='username'>Jacob Adams</span>
          </td>
          <td className='date'>8 September, 2024</td>
          <td className="amount">$149</td>
          <td className='status'><Button type="Rejected" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLarge