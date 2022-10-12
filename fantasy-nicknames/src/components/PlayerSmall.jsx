import React from "react";
export default function Player(props) {
  var playerName = props.items.name 
  var firstInitial = playerName.substring(0,1)
  var lastName = playerName.substring(playerName.indexOf(" ") + 1, playerName.length)
  var playerURL = (firstInitial + "_" + lastName).toLowerCase()

  return (
    <>
      <div className="playerSmall">
        <div className="playerSmall__picture">
          <img className="playerSmall__picture_img" src={"src/images/" + playerURL + ".png"} id={props.items.name + " img"}/>
        </div>
        <div className="playerSmall__info">
          <h2 className="playerSmall__info_name" id={props.items.name}>{props.items.name}</h2>
          <h4 className="playerSmall__info_type" id={props.items.type}>{props.items.type}</h4>
          <h3 className="playerSmall__info_number" id={props.items.number}>{'#' + props.items.number}</h3>
        </div>
      </div>
    </>
    
  )
}
