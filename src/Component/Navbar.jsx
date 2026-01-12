import React from 'react'
import "./Style.css"
// import { FaWhatsapp, FaPhone} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './Style.css'
import JU_logo_white from './images/JU_logo_white.png'
//import img1 from './images/logo.jpg'
// import HomePage from './HomePage'
function Navbar() {
    return ( 
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
    <a class="navbar-brand" href="#">
      <img src={JU_logo_white} alt="JU-logo" width="70" height="80"/>
      </a>
      <ul class="navbar-nav">
        {/* <li class="nav-item">
          <h2>Tour De Saint Martin</h2>
        </li> */}
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
        <Link class="nav-link" to="/registration">Event Registration</Link>
        </li> */}
        <li class="nav-item">
        <Link class="nav-link" to="/gallery">Gallery</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/login">Login / Sign - up</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/about-us">About Us</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/contact-us">Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        
     );
}

export default Navbar;