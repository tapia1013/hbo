import React from 'react';
import Header from '../UI/Header';
import SideNav from '../UI/SideNav';


const MainLayout = (props) => {
  return (
    <div style={{
      background: 'linear-gradient(312deg, rgb(103 44 197) 0%, rgb(46, 23, 90) 63%, rgb(13, 9, 40) 100%)',
      minHeight: '100vh'
    }}>
      <Header />
      <SideNav />
      <section className="content-container">
        {props.children}
      </section>
    </div >
  )
}


export default MainLayout;