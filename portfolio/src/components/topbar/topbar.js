import React from "react";
import "./topbar.css";
import Logo from '../../images/Port-logo.png'
// import {Link} from "react-router-dom";


export default function topbar() {
  return (
    <>
 <nav className="navbar">
       <div  className="navbar__container">
           <div className="navbar__toggle" id="mobile-menu">
               <span  className="bar"></span>
               <span  classNames="bar"></span>
               <span  className="bar"></span>
           </div>
           <ul  className="navbar__menu">
               <li  className="navbar__item">
               <a href="favor"  className="navbar__links">Home</a>
               </li>
               <li  className="navbar__item">
                <a href="favor"  className="navbar__links">Projects</a>
            </li>
            <li  className="navbar__item">
                <a href="contact.html"  className="navbar__links">Contact</a>
            </li>
            <li  className="navbar__item">
                <a href="contact.html"  className="navbar__links">Resume</a>
            </li>
           </ul>
       </div>
   </nav>
    </>
  );
}