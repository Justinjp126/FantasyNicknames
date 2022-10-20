import React from "react";
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <>
      <div className="header__nav_navbar">
        <nav role="navigation">
          <div id="menuToggle">       
            <input type="checkbox" />         
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link to="/"><li>Home</li></Link>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </>
    
  );
}
