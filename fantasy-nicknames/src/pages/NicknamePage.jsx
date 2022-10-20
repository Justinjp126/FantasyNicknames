import React from "react";
import Nickname from "../components/Nickname"
import Header from "../components/Header"
import Search from "../components/Search"
import fantasyNicknames from "../fantasy-nicknames.json"
import PlayerSmall from "../components/PlayerSmall"
import { useSearchParams } from "react-router-dom";
export default function NicknamePage(props) {
  //put names into array
  var namesArray = []
  var nicknamesArray = []
  const [searchParams] = useSearchParams()
  const input = searchParams.get("searchBar");
  var playerName = input.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  //grab each player using name as key
  for(var i = 0; i < namesArray.length; i++) {
    const name = namesArray[i]
    nicknamesArray.push((fantasyNicknames[name]))
  }

  //create 
  const names = nicknamesArray.map((items, index) => {
    return (
      <>
      <main>  
        <PlayerSmall items={items.name} />
      </main>
      
      <Nickname key={index} items={items} />

      </>
    )
  })
  return (
    <>
      <main>
        <Header />
        <Search />
        <PlayerSmall items={playerName} />
      </main>
      <Nickname key={playerName} items={fantasyNicknames[playerName]} />
    </>
    
  );
}
