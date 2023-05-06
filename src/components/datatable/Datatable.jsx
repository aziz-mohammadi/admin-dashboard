import React, { useState } from 'react'
import './Datatable.scss';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datasource';
import { Link } from 'react-router-dom';
const Datatable = () => {
    const [data, setData] = useState(userRows);
    const handleDelete = (id) => {
        setData(data.filter(item  => item.id !== id));
    }
    const actionColumn = [
        { filed: 'active', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
                <div className='cellAction'>
                    <Link to="/users/test" style={{ textDecoration: 'none' }}>
                        <div className='viewButton'>View</div>
                    </Link>
                    <div className='deleteButton' onClick={() => handleDelete(params.row.id)}>Delete</div>
                </div>
            )
        }}
    ];
  return (
    <div className='datatable' style={{ height: 600, width: '100%' }}>
        <div className="datatableTitle">
            Add New User
            <Link to="/users/new" className="link">Add New</Link>
        </div>
        <DataGrid
            className='datagrid'
            rows={data}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable
