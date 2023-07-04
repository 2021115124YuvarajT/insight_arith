import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import "./Sidenavbar.css";

const Sidenavbar = () =>{
    const NavStyle = ({ isActive }) => {
      return {
            fontWeight: isActive ? 'bolder' : 'larger',
            color: isActive ? '#F8CF50' : 'white',
        };
    };
    const location = useLocation();
    const [navigationItems, setNavigationItems] = useState([]);
    useEffect(
        ()=>
    {
        const currentPage = location.pathname;
        let items = [];
        if (currentPage === '/mul' || currentPage==='/mul/MulIntro' || currentPage === '/mul/Nikhilam' || currentPage==='/mul/Urdvha') {
            items = [
              { label: 'Introduction', link: '/mul/MulIntro' },
              { label: 'Nikhilam', link: '/mul/Nikhilam' },
              { label: 'Urdvha Tiryagbyam', link: '/mul/Urdvha' },
            ];
          }
          else if(currentPage==='/place_val' || currentPage==='/place_val/smallstory' || currentPage==='/place_val/M_behind' || currentPage==='/place_val/Mishrank' || currentPage==='/place_val/try_place_val'){
            items = [
              { label: 'A small Story', link: '/place_val/smallstory' },
              { label: 'Maths Behind PVS', link: '/place_val/M_behind' },
              { label: 'Mishrank', link: '/place_val/Mishrank' },
              { label: 'Try these', link: '/place_val/try_place_val'}
            ];
          }
          else if(currentPage === "/squar" || currentPage === '/squar/squar_intro' || currentPage==="/squar/dwanda" || currentPage==="/squar/squar_method" || currentPage === "/squar/squar_examples" || currentPage==="/squar/squar_method" || currentPage==="/squar/squar_exercises"){
            items=[
              {label:'Introduction',link:'/squar/squar_intro'},
              {label:'Dwanda',link:'/squar/dwanda'},
              {label:'The Method',link:'/squar/squar_method'},
              {label:'Examples',link:'/squar/squar_examples'},
              {label:'Exercises',link:'/squar/squar_exercises'}
            ];
          }
          else if(currentPage === '/divs' || currentPage === '/divs/divs_intro' || currentPage === "/divs/divs_how" || currentPage === "/divs/divs_exercise" || currentPage === "/divs/divs_eka" || currentPage === "/divs/divs_better" || currentPage === "/divs/divs_negative"){
            items = [
              {label:'Introduction',link:'/divs/divs_intro'},
              {label:'The Ekadhika',link:"/divs/divs_eka"},
              {label:'Negative Ekadhika',link: "/divs/divs_negative"},
              {label:'Better Techniqes.',link:"/divs/divs_better"},
              {label:'Exercises',link:"/divs/divs_exercise"},
              {label:'How does it work?',link:"/divs/divs_how"}
            ]
          }
          setNavigationItems(items);
    } , [location.pathname])
  return (
    <div className="container">
      <nav className="sidebar">
        <ul className="navbar-items">
          {navigationItems.map((item,index) => (
            <li key={index} className="navbar-item" 
            style={{backgroundColor:item.link === location.pathname ? '#111' : '',}}>
              <NavLink style={NavStyle} to={item.link}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );    
};
export default Sidenavbar;
