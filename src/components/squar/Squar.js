import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import { Outlet } from 'react-router-dom';
const Squar = () => {
    return (
    <div>
    
     <Sidenavbar/>
     <Outlet/>
    </div>
  );
};

export default Squar;
