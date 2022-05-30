import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const urlList = [
  {
    url: 'https://yahoofinance-stocks1.p.rapidapi.com',
    label: 'Yahoo Finance Stocks',
    headers: {
      'X-RapidAPI-Host': 'yahoofinance-stocks1.p.rapidapi.com',
      'X-RapidAPI-Key': '27d642a60dmshf8dc8bcd7c87d63p16d60cjsnbd98e7c79e57'
    }
  }
]

const ApiConfig = props => {

  const [apiUrl, setApiUrl] = React.useState('');

  const inputOnchange = (event, inputType, value) => {
    console.log(apiUrl);
    if (event && inputType && value) {
      setApiUrl(value);
      props.onEventHandler(inputType, value);
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="apiUrl"
      options={urlList}
      onChange={(event, newValue) => {
        inputOnchange(event, 'apiUrl', newValue);
      }}
      renderInput={(params) => <TextField {...params} label="API URL" />}
    />
  )
}

export default ApiConfig
