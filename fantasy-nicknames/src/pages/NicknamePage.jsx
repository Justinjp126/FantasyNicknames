import React from "react";
import Nickname from "../components/Nickname"
import fantasyNicknames from "../fantasy-nicknames.json"
export default function NicknamePage() {
  //put names into array
  var namesArray = []
  var nicknamesArray = []
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  //grab each player using name as key
  for(var i = 0; i < namesArray.length; i++) {
    const name = namesArray[i]
    nicknamesArray.push((fantasyNicknames[name]))
  }

  //create 
  const names = nicknamesArray.map((items) => {
    return (
      <Nickname items={items} />
    )
  })
  return (
    <>
      {names}
    </>
    
  );
}
