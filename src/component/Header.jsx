import React from 'react';
import './Header.css'
import Topheader from './Topheader';
import {NavLink} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SportsMotorsportsIcon from '@mui/icons-material/SportsMotorsports';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AddRoadIcon from '@mui/icons-material/AddRoad';


const Header = () => {
  return (
      <nav className="Navbar">
    <Topheader />
    <div className="botton__nav">
    <ul className='nav__Links'>  
   <li className="sub-menu-parent" tab-index="0">
       <NavLink to="/">HOME</NavLink></li>
       <li className="sub-menu-parent" tab-index="0">
       <NavLink to="/about">ABOUT US</NavLink></li>
     <li className="sub-menu-parent" tab-index="0">
       <NavLink to="/product">PRODUCTS</NavLink>
       <ul className="sub-menu">
         <li><div className='nav__dropdown'><span><SportsMotorsportsIcon /></span> <NavLink to="/"> Head Protection</NavLink></div></li>
         <li><div className='nav__dropdown'><span><VisibilityIcon /></span> <NavLink to="/">Eye Protection</NavLink></div></li>
         <li><div className='nav__dropdown'><span><CleanHandsIcon /></span> <NavLink to="/">Hand Protection</NavLink></div></li>
         <li><div className='nav__dropdown'><span><DoNotStepIcon /></span><NavLink to="/">Feet Protection</NavLink></div></li>
         <li><div className='nav__dropdown'><span><LocalFireDepartmentIcon /></span><NavLink to="/">Fire Protection</NavLink></div></li>
         <li><div className='nav__dropdown'><span><AddRoadIcon /></span><NavLink to="/">Raod Protection</NavLink></div></li>
       </ul>
     </li>
     <li className="sub-menu-parent buisness__link" tab-index="0">
       <NavLink to="/buisness">BUISNESS</NavLink>
       <ul className="sub-menu">
         <li><NavLink to="/">Regional Channel Partners</NavLink></li>
         <li><NavLink to="/">International Channel Partners</NavLink></li>
        
       </ul>
     </li>
     <li className="sub-menu-parent" tab-index="0">
       <NavLink to="/career">CAREERS</NavLink></li>
       
     <li className="sub-menu-parent" tab-index="0">
       <NavLink to="/contact">CONTACT US</NavLink></li>
       {/* <li><input className="Search_bar" placeholder="Search"></input> <SearchIcon /></li> */}
    
       <div className='serch__bar'>
          <div className="Search_bar">
            <input placeholder="Search..."></input>

            <div className="Search_icon">
             <SearchIcon color='white'/>
            </div>
          </div>
        </div>
   </ul>
    </div>
  
 </nav>

  )
}

export default Header