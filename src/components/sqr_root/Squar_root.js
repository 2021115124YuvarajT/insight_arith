import React from 'react';
import Sidenavbar from '../Sidenavbar/Sidenavbar';
import '../division/nik_div.css'
import { Outlet } from 'react-router-dom';

const Squar_root = () => {
  return (
    <div>
      <Sidenavbar/>
      <Outlet/>
    </div>
  );
};

export default Squar_root;
