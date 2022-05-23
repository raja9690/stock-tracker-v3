import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../functions/get-analyst-data'

const columns = [
    { field: 'symbol', headerName: 'SYMBOL', width: 150 },
    { field: 'companyName', headerName: 'Company Name', width: 400 },
    { field: 'industryOrCategory', headerName: 'industry / Category', width: 300 },
    { field: 'exchangeCode', headerName: 'Exchange Code', width: 200 }
];

export default function DataTable() {
    const removeRow = () => alert("Added to Fav list");
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        api.readAll()
            .then((data) => data[0].data.results)
            .then((data) => setTableData(data))

    }, []);
    return (
        <div className="analyst-body-container">
            <div className='analyst-panel'>
                <Button variant="outlined" onClick={removeRow}>
                    Remove From Favorites
                </Button>
                <DataGrid
                    getRowId={(row) => row.symbol}
                    rows={tableData}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}
