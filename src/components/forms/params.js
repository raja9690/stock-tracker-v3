import * as React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const orderBy = [
    { label: 'Ascending', order: 'Ascending' },
    { label: 'Descending', order: 'Descending' }
  ];

const ApiParams = props => {

    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [apiOrderBy, setApiOrderBy] = React.useState('');

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                id="startDate"
                label="Start Date"
                value={startDate}
                onChange={(newValue) => {
                    setStartDate(newValue);
                    props.onEventHandler('startDate', newValue);
                }}
                renderInput={(params) => <TextField sx={{ width: '100%' }} {...params} />}
                />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                id="endDate"
                label="End Date"
                value={endDate}
                onChange={(newValue) => {
                    setEndDate(newValue);
                    props.onEventHandler('endDate', newValue);
                }}
                renderInput={(params) => <TextField sx={{ width: '100%' }} {...params} />}
                />
            </LocalizationProvider>
            <Autocomplete
                autoHighlight
                disablePortal
                id="orderBy"
                options={orderBy}
                value={apiOrderBy ? apiOrderBy.order : ''}
                onChange={(event, newValue) => {
                    setApiOrderBy(newValue);
                    props.onEventHandler('orderBy', newValue);
                }}
                renderInput={(params) => <TextField {...params} label="Order By" />}
            />
        </>
    );
}

export default ApiParams;
