import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="header__nav_navbar">
        <nav role="navigation" className="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="header__expand">
          <div className="header__underline">
            <Link to="/">
              <span className="header__expand_home">Home</span>
            </Link>
          </div>
          <div className="header__underline">
            <Link to="/about">
              <span className="header__expand_about">About</span>
            </Link>
          </div>
          <div className="header__underline">
            <Link to="/contact">
              <span className="header__expand_contact">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
