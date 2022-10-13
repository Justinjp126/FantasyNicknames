import React from "react";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
    <header className="header">
        <img className="header__logo" src="src/images/logo.svg" alt="Logo"/>
        <div className="header__nav">
            <img className="header__nav_profile" src="src/images/profile.svg" alt="Profile" />
            <Navbar className="header__nav_navbar" />
        </div>
    </header>
    </>
    
  );
}


