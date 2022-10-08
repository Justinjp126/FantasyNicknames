import React from "react";
import Header from "./Header"
import Search from "./Search";
import Player from "./Player";
export default function MainPage() {
  return (
    <>
        <Header />
        <Search />
        <main>
            <h1>Popular Players</h1>
            <p>Or search for your favorite players</p>
            <Player />
            <Player />
            <Player />
            <Player />
            <Player />
            <Player />
        </main>
        
    </>
    
  );
}
