import React from 'react';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '../components/login';
import { msalConfig } from "../../authConfig";


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const msalInstance = new PublicClientApplication(msalConfig);
const pages = [];

export default () => {

  return (
    <div className="main">
      <div className='main-container'>
        <Header pages={pages} />
        <MsalProvider instance={msalInstance}>
        <Login />
        </MsalProvider>
        <Footer />
      </div>
    </div>
  );
}