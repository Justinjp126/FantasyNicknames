import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import PopularPlayers from "../components/PopularPlayers";
import PillMenu from "../components/PillMenu";
export default function MainPage() {
  
  return (
    <>
      <main>
        <Header />
        <section>
          <div className="mainText">
            <h1 className="mainText__title">Fantasy Nicknames</h1>
            <p className="mainText__text">Search for your favorite NFL player</p>
          </div>
          <Search />
          <PillMenu />
          <PopularPlayers />
      </section>
      </main>

    </>
    
  );
}
