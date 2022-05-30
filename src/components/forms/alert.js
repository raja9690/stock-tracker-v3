import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';


const AlertPanel = props => {

  return (
    <div className='alert-panel'>
        <Stack sx={{ width: '100%' }} spacing={2}>
          { props.apiCofigStatus == 'error' ? <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            API configuration failed — <strong>please try after sometime!</strong>
          </Alert> : null }
          { props.apiCofigStatus == 'incorrect' ? <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            API configuration in-correct — <strong>check it out!</strong>
          </Alert> : null }
          { props.apiCofigStatus == 'success' ? <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            API configuration success — <strong>Refer configuration list view.</strong>
          </Alert> : null}
        </Stack>
    </div>
  );
}

export default AlertPanel
