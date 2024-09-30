import React from 'react';
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductImage">
            <label htmlFor='file'>Image</label>
            <input type="file" id='file' />
        </div>
        <div className="newProductName">
            <label>Name</label>
            <input type="text" placeholder='Product name' />
        </div>
        <div className="newProductStock">
            <label>Stock</label>
            <input type="number" placeholder='---' />
        </div>
        <div className="newProductActivity">
            <label>Actve</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className='newProductButton'>Create</button>
      </form>
    </div>
  )
}

export default NewProduct
