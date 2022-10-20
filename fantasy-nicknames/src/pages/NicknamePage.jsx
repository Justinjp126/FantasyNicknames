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
  var input = searchParams.get("searchBar");

  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })
  
  const namesArrayLowercase = namesArray.map(name => name.toLowerCase());
  const inputLowercase = input.toLowerCase();

  function checkPlayer(player) {
    return age > 18;
  }

  //console.log(inputLowercase)
  //console.log(namesArrayLowercase)
  if(namesArrayLowercase.includes(inputLowercase)) {
    for(var i = 0; i < namesArrayLowercase.length; i++) {
      if(namesArrayLowercase[i] == inputLowercase) {
        var playerName = namesArray[i]
      }
    }
  }

  //grab each player using name as key
  for(var i = 0; i < namesArray.length; i++) {
    const name = namesArray[i]
    nicknamesArray.push((fantasyNicknames[name]))
  }

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
