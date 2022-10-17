import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
    <header className="header">
        <Link to={'/'}>
          <img className="header__logo" src="src/images/logo.svg" alt="Logo"/>
        </Link>
        <div className="header__nav">
            <img className="header__nav_profile" src="src/images/profile.svg" alt="Profile" />
            <Navbar />
        </div>
    </header>

    </>
    
  );
}


