import React from 'react';
import "./product.css";
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

const Product = () => {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
            <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/3921846/pexels-photo-3921846.jpeg" alt="" className="productInfoImg" />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">sales:</span>
                    <span className="productInfoValue">5100</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">active:</span>
                    <span className="productInfoValue">yes</span>
                </div> 
                <div className="productInfoItem">
                    <span className="productInfoKey">in stock:</span>
                    <span className="productInfoValue">no</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className='productForm'>
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder='Product name' />
                <label>In Stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://images.pexels.com/photos/3921846/pexels-photo-3921846.jpeg" alt="" className="productUploadImg" />
                    <label for="file">
                        <Publish />
                        Edit
                    </label>
                    <input type="file" id='file' style={{display: "none"}} />
                </div>
                <button className="productUploadButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Product
