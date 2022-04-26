import React from "react";
import "./topbar.css";
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
               <a href="#intro"  className="navbar__links">Home</a>
               </li>
               <li  className="navbar__item">
                <a href="#projects"  className="navbar__links">Projects</a>
            </li>
            <li  className="navbar__item">
                <a href="#contact_page"  className="navbar__links">Contact</a>
            </li>
            <li  className="navbar__item">
                <a href="https://docs.google.com/document/d/1jMYYKn-151fNJeFk1h9ebrWDZR1ipTlalFNJZlu_JIU/edit?usp=sharing"  className="navbar__links">Resume</a>
            </li>
           </ul>
       </div>
   </nav>
    </>
  ); 
}