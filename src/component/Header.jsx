import React from 'react';
import './Header.css'
import Topheader from './Topheader';
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
       <a href="#">HOME</a></li>
       <li className="sub-menu-parent" tab-index="0">
       <a href="#">ABOUT US</a></li>
     <li className="sub-menu-parent" tab-index="0">
       <a href="http://google.com">PRODUCTS</a>
       <ul className="sub-menu">
         <li> <span><SportsMotorsportsIcon /></span> <a href="#"> Head Protection</a></li>
         <li><span><VisibilityIcon /></span> <a href="#">Eye Protection</a></li>
         <li><span><CleanHandsIcon /></span> <a href="#">Hand Protection</a></li>
         <li><span><DoNotStepIcon /></span><a href="#">Feet Protection</a></li>
         <li><span><LocalFireDepartmentIcon /></span><a href="#">Fire Protection</a></li>
         <li><span><AddRoadIcon /></span><a href="#">Raod Protection</a></li>
       </ul>
     </li>
     <li className="sub-menu-parent buisness__link" tab-index="0">
       <a href="#">BUISNESS</a>
       <ul className="sub-menu">
         <li><a href="#">Regional Channel Partners</a></li>
         <li><a href="#">International Channel Partners</a></li>
        
       </ul>
     </li>
     <li className="sub-menu-parent" tab-index="0">
       <a href="#">CAREERS</a></li>
       
     <li className="sub-menu-parent" tab-index="0">
       <a href="#">CONTACT US</a></li>
       {/* <li><input className="Search_bar" placeholder="Search"></input> <SearchIcon /></li> */}
    
       <div className='serch__bar'>
          <div className="Search_bar">
            <input placeholder="Search..."></input>

            <div className="Search_icon">
             <SearchIcon />
            </div>
          </div>
        </div>
   </ul>
    </div>
  
 </nav>

  )
}

export default Header