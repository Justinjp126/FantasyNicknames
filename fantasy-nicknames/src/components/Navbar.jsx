import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

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
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="header__expand">
          <div className="header__underline">
            <NavLink to="/home">
              {({ isActive }) => (
                <span
                  className={isActive ? activeClassName : undefined}
                  id="home"
                >
                  Home
                </span>
              )}
            </NavLink>
          </div>
          <div className="header__underline">
            <NavLink to="/contact">
              {({ isActive }) => (
                <span
                  className={isActive ? activeClassName : undefined}
                  id="contact"
                >
                  Contact
                </span>
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
//"header__expand_contact nav-item"
