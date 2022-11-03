import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import PopularPlayers from "../components/PopularPlayers";

export default function MainPage() {
  
  return (
    <>
      <main>
        <Header />
        <div className="mainText">
          <h1 className="mainText__title">Fantasy Nicknames</h1>
          <p className="mainText__text">Search for your favorite NFL player</p>
        </div>
        <Search />

      </main>
      <PopularPlayers />
      
    </>
    
  );
}
