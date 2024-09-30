import React, { useState } from 'react';
import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { DeleteOutline } from '@mui/icons-material';
import {userRows} from "../../dummyData";
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
      return(
        <div className='userListUser'>
          <img src={params.row.avatar} alt="" className='userListImg' />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email ID', width: 230 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
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
            <Link to={"/user/" + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline className='userListDelete' onClick={ () => handleDelete(params.row.id)} />
          </div> 
          </>
        )
      }
    }
  ];

  const paginationModel = { page: 0, pageSize: 5 };
  return (
    <div className='userList'>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data}
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

export default UserList
