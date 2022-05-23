import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

const Login = props => {

  return (
    <div className='body-container'>
        <div className='banner-text'>
          <h1>A simple application to analyse basic <b>Stock tracking</b></h1>
        </div>
        <div className='login-panel'>
          <Button variant="contained" endIcon={<LoginIcon />}>
            MicroSoft Login
          </Button>
        </div>
      </div>
  );
}

export default Login;