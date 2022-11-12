import React from "react";
import { db } from "../firebase";
import { ref } from "firebase/database";
import { useDatabaseSnapshot } from "@react-query-firebase/database";

export default function Player(props) {
  const dbRef = ref(db, "/names/" + props.items);
  const products = useDatabaseSnapshot(["/names/" + props.items], dbRef);
  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  const playerObject = products.data;
  const json = JSON.stringify(playerObject);
  const player = JSON.parse(json);

  var playerName = props.items;
  var firstInitial = playerName.substring(0, 1);
  var lastName = playerName.substring(
    playerName.indexOf(" ") + 1,
    playerName.length
  );
  var playerURL = (firstInitial + "_" + lastName).toLowerCase();

  if (playerName == "Amon-Ra St Brown") {
    playerURL = "am_brown";
  }

  return (
    <>
      <div className="playerSmall">
        <div className="playerSmall__picture">
          <img
            className="playerSmall__picture_img"
            src={"src/images/" + playerURL + ".png"}
            id={player.name + " img"}
            alt={player.name + " Image"}
          />
        </div>
        <div className="playerSmall__info">
          <h2 className="playerSmall__info_name" id={player.name}>
            {player.name}
          </h2>
          <h4 className="playerSmall__info_type" id={player.type}>
            {player.type}
          </h4>
          <h3 className="playerSmall__info_number" id={player.number}>
            {"#" + player.number}
          </h3>
        </div>
      </div>
    </>
  );
}
