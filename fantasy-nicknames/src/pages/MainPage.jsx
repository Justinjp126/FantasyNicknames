import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import Player from "../components/Player";
import fantasyNicknames from "../fantasy-nicknames.json"
export default function MainPage() {
  
  return (
    <>
      <main>
        <Header />
        <Search addPlayer={"Cooper Kupp"}/>
        <div className="mainText">
          <h1 className="mainText__title">Popular Players</h1>
          <p className="mainText__text">Or search for your favorite players</p>
        </div>
      </main>
      <Player items={fantasyNicknames["Johnathan Taylor"]} />
      <Player items={fantasyNicknames["Najee Harris"]} />
      <Player items={fantasyNicknames["Cooper Kupp"]} />
      <Player items={fantasyNicknames["Derrick Henry"]} />
      <Player items={fantasyNicknames["Christian McCaffrey"]} />
      <Player items={fantasyNicknames["Alvin Kamara"]} />
      
    </>
    
  );
}
