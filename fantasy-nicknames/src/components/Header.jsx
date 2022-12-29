import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
      <header className="header">
        <Link to={"/home"}>
          <img className="header__logo" src="svg/logo.svg" alt="Logo" />
        </Link>
        <div className="header__nav">
          <img
            className="header__nav_profile"
            src="svg/profile-cropped.svg"
            alt="Profile"
          />
          <Navbar />
        </div>
      </header>
    </>
  );
}
