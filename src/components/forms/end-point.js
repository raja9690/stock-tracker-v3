import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={endpoints}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="end-points" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const endpoints = [
  { label: 'https://yahoofinance-stocks1.p.rapidapi.com/exchanges' },
  { label: 'https://yahoofinance-stocks1.p.rapidapi.com/dividends' },
  { label: 'https://yahoofinance-stocks1.p.rapidapi.com/stock-prices' },
  { label: 'https://yahoofinance-stocks1.p.rapidapi.com/companies/list-by-exchange' }
];
