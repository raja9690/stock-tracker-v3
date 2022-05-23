import React, { useEffect, useState } from 'react';    
import Header from '../../components/header'
import Footer from '../../components/footer'
import AnalystFav from '../../components/analyst-favorites'


const pages = ['Dashboard'];

export default () => {    
  
  return (
    <div className='main-container'>
        <Header pages={pages} />
        <AnalystFav />
        <Footer />
      </div>
  );    
}