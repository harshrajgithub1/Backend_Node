import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../Shared/Header";

const Layout = () => {
  return (
    <div className='homie'>
      
        <Header/>    
        <div className="container">
        <Outlet />

        </div>
        {/* <Home/> */}

      
    </div>
  )
};

export default Layout;