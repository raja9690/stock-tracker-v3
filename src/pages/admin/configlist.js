import React from "react";
import Header from '../../components/header'
import Footer from '../../components/footer'
import AdminConfigView from '../../components/admin-configtable';

const pages = ['New Configuration'];

function AdminConfigList() {
    return (
        <div className='main-container'>
          <Header pages={pages} />
          <AdminConfigView />
          <Footer />
        </div>
      );
}

export default AdminConfigList;