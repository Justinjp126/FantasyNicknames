import React from "react";
import fantasyNicknames from "../fantasy-nicknames.json"

export default function Nickname(props) {
  var namesArray = []
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  return (
    <>
      <ul>
        {props.items.nicknames.map(nickname => (
          <li>{nickname}</li>
        ))}
      </ul>
      <br />
    </>
    
  );
}
