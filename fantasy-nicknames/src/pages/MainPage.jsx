import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
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
