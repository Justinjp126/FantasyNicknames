import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
export default function Navbar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
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
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="header__expand">
          <div className="header__underline">
            <NavLink to="/">
              <span
                className={`header__expand_contact nav-item ${
                  splitLocation[1] === "" ||
                  splitLocation[1] === "home" ||
                  splitLocation[1] === "popular" ||
                  splitLocation[1] === "new" ||
                  splitLocation[1] === "qb" ||
                  splitLocation[1] === "rb" ||
                  splitLocation[1] === "wr" ||
                  splitLocation[1] === "te"
                    ? "navActive"
                    : "navInactive"
                }`}
                id="home"
              >
                Home
              </span>
            </NavLink>
          </div>
          <div className="header__underline">
            <NavLink to="/contact">
              <span
                className={`header__expand_contact nav-item ${
                  splitLocation[1] === "contact" ? "navActive" : "navInactive"
                }`}
                id="contact"
              >
                Contact
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
//"header__expand_contact nav-item"
