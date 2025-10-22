import React from 'react';
import Nav from '../Component/Nav';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const Root = () => {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>

      <main>
    <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;