import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const symbols = [
    { label: 'TECHM.NS', symbol: 'TECHM.NS' },
    { label: 'MARUTI.NS', symbol: 'MARUTI.NS' },
    { label: 'ONGC.NS', symbol: 'ONGC.NS' },
    { label: 'ICICIBANK.NS', symbol: 'ICICIBANK.NS' },
    { label: 'WIPRO.NS', symbol: 'WIPRO.NS' },
    { label: 'ULTRACEMCO.NS', symbol: 'ULTRACEMCO.NS' },
    { label: 'TITAN.NS', symbol: 'TITAN.NS' },
    { label: 'SHREECEM.NS', symbol: 'SHREECEM.NS' }
  ]

const ApiConfig = props => {

  const [apiSymbol, setApiSymbol] = React.useState('');

  const inputOnchange = (event, inputType, value) => {
    console.log(apiSymbol);
    if (event && inputType && value) {
        setApiSymbol(value);
      props.onEventHandler(inputType, value);
    }
  }

  return (
    <Autocomplete
        autoHighlight
        disablePortal
        id="symbol"
        options={symbols}
        onChange={(event, newValue) => {
        inputOnchange(event, 'symbol', newValue);
        }}
        renderInput={(params) => <TextField required {...params} label="Symbol" />}
    />
  )
}

export default ApiConfig
