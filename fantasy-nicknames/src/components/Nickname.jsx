import React, { createContext } from "react";
import fantasyNicknames from "../fantasy-nicknames.json"

export default function Nickname(props) {
  var namesArray = []
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  console.log(props)

  return (
    <>
    
    <div className="nickname">
      <ol className="nickname__ol" id={props.items}>
        {props.items.nicknames.map(nickname => (
          <li className="nickname__ol_li">{nickname}</li>
        ))}
      </ol>
    </div> 
    </>
    
  );
}
