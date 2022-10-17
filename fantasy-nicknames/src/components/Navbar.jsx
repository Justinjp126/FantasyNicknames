import React from "react";

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
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
      </div>
    </>
    
  );
}
