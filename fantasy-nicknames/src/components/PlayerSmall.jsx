import React from "react";
import fantasyNicknames from "../fantasy-nicknames.json"
export default function Player(props) {
  var playerName = props.items 
  var firstInitial = playerName.substring(0,1)
  var lastName = playerName.substring(playerName.indexOf(" ") + 1, playerName.length)
  var playerURL = (firstInitial + "_" + lastName).toLowerCase()
  
  //put names into array
  var namesArray = []
  var nicknamesArray = []
  var nameObj = {}
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })

  //grab each player using name as key
  for(var i = 0; i < namesArray.length; i++) {
    const name = namesArray[i]
    nicknamesArray.push((fantasyNicknames[name]))
  }

  //find key for the current name 
  for(var i = 0; i < nicknamesArray.length; i++) {
    if(nicknamesArray[i].name == playerName) {
      nameObj = nicknamesArray[i]
    }
  }

  return (
    <>
      <div className="playerSmall">
        <div className="playerSmall__picture">
          <img className="playerSmall__picture_img" src={"src/images/" + playerURL + ".png"} id={nameObj.name + " img"}/>
        </div>
        <div className="playerSmall__info">
          <h2 className="playerSmall__info_name" id={nameObj.name}>{nameObj.name}</h2>
          <h4 className="playerSmall__info_type" id={nameObj.type}>{nameObj.type}</h4>
          <h3 className="playerSmall__info_number" id={nameObj.number}>{'#' + nameObj.number}</h3>
        </div>
      </div>
    </>
    
  )
}
