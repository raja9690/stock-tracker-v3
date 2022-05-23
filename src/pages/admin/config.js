import React from "react";
import Header from '../../components/header'
import Footer from '../../components/footer'
import Admin from '../../components/admin-container';

const pages = ['Configured List'];

function AdminConfig() {
  return (
    <div className='main-container'>
      <Header pages={pages} />
      <Admin />
      <Footer />
    </div>
  );
}

export default AdminConfig;