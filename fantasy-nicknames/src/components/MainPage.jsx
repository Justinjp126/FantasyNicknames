import React from "react";
import Header from "./Header"
import Search from "./Search";
import Player from "./Player";
import fantasyNicknames from "../fantasy-nicknames.json"
export default function MainPage() {
  
  return (
    <>
        <Header />
        <Search />
        <main>
            <h1>Popular Players</h1>
            <p>Or search for your favorite players</p>
            <Player items={fantasyNicknames}/>
            
        </main>
        
    </>
    
  );
}
