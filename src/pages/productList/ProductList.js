import React, { useState } from 'react';
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { DeleteOutline } from '@mui/icons-material';
import {productRows} from "../../dummyData";
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [productData, setProductData] = useState(productRows);
    const handleDelete = (id) => {
        setProductData(productData.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
          return(
            <div className='productListItem'>
              <img src={params.row.img} alt="" className='userListImg' />
              {params.row.name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 230 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return(
              <>
              <div className="userButtons">
                <Link to={"/product/" + params.row.id}>
                  <button className='productListEdit'>Edit</button>
                </Link>
                <DeleteOutline className='productListDelete' onClick={ () => handleDelete(params.row.id)} />
              </div> 
              </>
            )
          }
        }
    ];
    
    const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className='productList'>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={productData}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default ProductList
