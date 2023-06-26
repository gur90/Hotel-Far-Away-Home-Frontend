import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';
import Services from '../services/Services';

function Main(): JSX.Element {
  return (
    <>
      <NavBar />
      <Header />
      <Services />
      <Footer />
      {/* <h1 className="mb-1">Список дел Алишера</h1> */}
      <Outlet />
      {/* <NavBar /> */}
    </>
  );
}

export default Main;
