import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const apiActions = [
  { action: 'GET', label: 'Get' },
  { action: 'POST', label: 'Post' }
]

const ApiAction = props => {

  const [apiAction, setApiAction] = React.useState('');

  const inputOnchange = (event, inputType, value) => {
    console.log(apiAction);
    if (event && inputType && value) {
      setApiAction(value);
      props.onEventHandler(inputType, value);
    }
  }

  return (
    <Autocomplete
      disablePortal
      id="action"
      options={apiActions}
      onChange={(event, newValue) => {
        inputOnchange(event, 'action', newValue);
      }}
      renderInput={(params) => <TextField required {...params} label="Action" />}
    />
  );
}

export default ApiAction
