import React from "react";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <>
    <header className="header">
        <img className="header__logo" alt="Logo"/>
        <div className="header__nav">
            <img className="header__nav_profile" alt="Profile" />
            <Navbar className="header__nav_navbar" />
        </div>
    </header>
    </>
    
  );
}


