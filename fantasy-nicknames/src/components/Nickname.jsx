import React from "react";
import fantasyNicknames from "../fantasy-nicknames.json"

export default function Nickname(props) {
  var namesArray = []
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  return (
    <>
    <div className="nickname">
      <ol className="nickname__ol" id={props.items.nickname}>
        {props.items.nicknames.map(nickname => (
          <li className="nickname__ol_li">{nickname}</li>
        ))}
      </ol>
    </div> 
    </>
    
  );
}
