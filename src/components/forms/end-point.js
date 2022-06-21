import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const endPoints = [
  { endPoint: 'stock-prices', label: 'Historic Stock Prices', isDateReq: true, isOrderByReq: true },
  { endPoint: 'stock-metadata', label: 'Live Stock Statistics', isDateReq: false, isOrderByReq: false }
]

const EndPoint = props => {

  const [apiEndPoint, setApiEndPoint] = React.useState('');

  const inputOnchange = (event, inputType, value) => {
    console.log(apiEndPoint);
    if (event && inputType && value) {
      setApiEndPoint(value);
      props.onEventHandler(inputType, value);
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="endPoint"
      options={endPoints}
      onChange={(event, newValue) => {
        inputOnchange(event, 'endPoint', newValue);
      }}
      renderInput={(params) => <TextField required {...params} label="end-points" />}
    />
  );
}

export default EndPoint
