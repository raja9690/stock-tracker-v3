import React, { useEffect, useState } from 'react';    
import Header from '../../components/header'
import Footer from '../../components/footer'
import Analyst from '../../components/analyst-dashboard'

const pages = ['favourites'];

export default () => {    
  
  return (
    <div className='main-container'>
        <Header pages={pages} />
        <Analyst />
        <Footer />
      </div>
  );    
}