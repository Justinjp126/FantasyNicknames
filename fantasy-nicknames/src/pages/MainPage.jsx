import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import Player from "../components/Player";
import Footer from "../components/Footer"
import fantasyNicknames from "../fantasy-nicknames.json"
import { Link } from "react-router-dom";
import { db } from "../firebase"
import { getDatabase, ref, onValue } from "firebase/database";

import PopularPlayers from "../components/PopularPlayers";

export default function MainPage() {
  
  return (
    <>
      <main>
        <Header />
        <Search />
        <div className="mainText">
          <h1 className="mainText__title">Popular Players</h1>
          <p className="mainText__text">Or search for your favorite players</p>
        </div>
      </main>
      <PopularPlayers />
      
    </>
    
  );
}
