import React from 'react';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Authlayout = () => {
  return (
    <div>
        <header>
          <Nav></Nav>
        </header>
        <main className='w-11/12 mx-auto'>
        <Outlet></Outlet>
        </main>
      

      <footer>
        <Footer></Footer>
      </footer>

    </div>
  );
};

export default Authlayout;