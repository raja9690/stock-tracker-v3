import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FormApiUrl from './forms/api-url'
import FormEndPoint from './forms/end-point'
import FormAction from './forms/action'
import FormHeader from './forms/header'
import FormSymbol from './forms/symbol'

const Admin = props => {

  return (
    <div className='admin-body-container'>
        <div className='banner-text-small'>
          <h3>A simple application to configure <b>Stock tracking</b></h3>
        </div>
        <div className='admin-panel'>
          <div className='admin-form-panel'>
            <h3>Config API</h3>
            <FormApiUrl />
            <FormEndPoint />
            <FormAction />
            <FormHeader />
            <FormSymbol />
          </div>
          <div className='review-submit-panel'>
            <FormHeader />
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
  );
}

export default Admin;