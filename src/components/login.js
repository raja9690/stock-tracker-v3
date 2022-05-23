import * as React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

const Login = props => {
  const { instance } = useMsal();
  return (
    <div className='body-container'>
        <div className='banner-text'>
          <h1>A simple application to analyse basic <b>Stock tracking</b></h1>
        </div>
        <div className='login-panel'>
          <Button variant="contained" onClick={() => handleLogin(instance)} endIcon={<LoginIcon />}>
            MicroSoft Login
          </Button>
        </div>
      </div>
  );
}

export default Login;