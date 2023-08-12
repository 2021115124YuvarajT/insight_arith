import React from 'react'
import Sidenavbar from '../Sidenavbar/Sidenavbar'
import { Outlet } from 'react-router-dom'
const Divs = () => 
{
  return (
    <div >
      <Sidenavbar/>
      <div>
      <Outlet />
      </div>
    </div>
  )
}

export default Divs;
const topcontainer={
  marginLeft:'250px',
  marginTop:'0px'
}