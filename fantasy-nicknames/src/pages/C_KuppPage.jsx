import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import PlayerSmall from "../components/PlayerSmall";
import fantasyNicknames from "../fantasy-nicknames.json"
export default function C_KuppPage() {
  
  return (
    <>
      <main>
        <Header />
        <Search />
        <PlayerSmall items={fantasyNicknames["Cooper Kupp"]} />
      </main>
      
    </>
    
  );
}
