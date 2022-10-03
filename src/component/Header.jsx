import React from 'react';
import './Header.css'
import Topheader from './Topheader';
import SearchIcon from '@mui/icons-material/Search';

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
         <li><a href="#">Sub Item 1</a></li>
         <li><a href="#">Sub Item 2</a></li>
         <li><a href="#">Sub Item 3</a></li>
         <li><a href="#">Sub Item 4</a></li>
       </ul>
     </li>
     <li className="sub-menu-parent buisness__link" tab-index="0">
       <a href="#">BUISNESS</a>
       <ul className="sub-menu">
         <li><a href="#">Sub Item 1</a></li>
         <li><a href="#">Sub Item 2</a></li>
         <li><a href="#">Sub Item 3</a></li>
         <li><a href="#">Sub Item 4</a></li>
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