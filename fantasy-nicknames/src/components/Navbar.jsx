import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const links = document.getElementsByClassName("nav-item");
  let location = useLocation();
  let path = location.pathname;
  let classUpdate = "nav-item";
  let home = document.getElementById("home");
  if (path == "/" && home !== null) {
    home.classList.add("active");
  }
  const handleClick = (event) => {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("navActive");
    }
    event.target.classList.add("navActive");
  };
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
              <span
                className="header__expand_home nav-item"
                onClick={handleClick}
                id="home"
              >
                Home
              </span>
            </Link>
          </div>
          <div className="header__underline">
            <Link to="/about">
              <span
                className="header__expand_about nav-item"
                onClick={handleClick}
                id="about"
              >
                About
              </span>
            </Link>
          </div>
          <div className="header__underline">
            <Link to="/contact">
              <span
                className="header__expand_contact nav-item"
                onClick={handleClick}
                id="contact"
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
