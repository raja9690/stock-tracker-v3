import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import Login from '../components/login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
const pages = [];

export default () => {

  return (
    <div className="main">
      <div className='main-container'>
        <Header pages={pages} />
        <Login />
        <Footer />
      </div>
    </div>
  );
}