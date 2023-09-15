// Layout.js
import React from 'react';
import Navbar from '../components/Navbar'; // Import your Navbar component
import Footer  from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
