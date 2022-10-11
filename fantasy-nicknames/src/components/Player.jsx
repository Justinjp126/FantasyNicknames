import React from "react";
export default function Player(props) {
  const myNames = props.items
  console.log(myNames['Johnathan Taylor'].nicknames)
  return (
    <>
      <div className="player">
        <img />
        <div className="player__info">
          <h2 className="player__info_name"></h2>
          <h4 className="player__info_type"></h4>
          <h3 className="plyer__info_number"></h3>
        </div>
      </div>
    </>
    
  )
}
