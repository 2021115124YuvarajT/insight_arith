import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidenavbar from '../Sidenavbar/Sidenavbar';


const Misc = () => {
  return (
     <div>
     <Sidenavbar/>
     <Outlet/>
   </div>
  );
};

export default Misc;





