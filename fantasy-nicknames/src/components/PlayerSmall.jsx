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
  var team = player.team.replace(/\,/g, "");
  if (playerName == "Amon-Ra St Brown") {
    playerURL = "am_brown";
  }

  var teamName = player.team
    .substring(player.team.indexOf(",") + 1)
    .toLowerCase()
    .trim();
  // if (teamName == "49ers") {
  //   teamName = "fourtyniners";
  // }

  return (
    <>
      <div className="playerSmall">
        <div className="playerSmall__picture">
          <img
            src={`/logos/${teamName}-min.png`}
            alt={`${teamName} Logo`}
            className="playerSmall__picture_logo"
          />
          <picture>
            <source
              srcSet={"/playerHeadshots/" + playerURL + ".webp"}
              type="image/webp"
            />
            <source
              srcSet={"/playerHeadshots/" + playerURL + ".png"}
              type="image/png"
            />
            <img
              className="playerSmall__picture_img"
              src={"/playerHeadshots/" + playerURL + ".png"}
              id={player.name + " img"}
              alt={player.name + " Image"}
            />
          </picture>
        </div>
        <div className="playerSmall__info">
          <div className="playerSmall__info-name-type">
            <h2 className="playerSmall__info_name" id={player.name}>
              {player.name}
            </h2>
            <h4 className="playerSmall__info_type" id={player.type}>
              {player.type}
            </h4>
          </div>
          <h5 className="playerSmall__info_team">{team}</h5>
          <h3 className="playerSmall__info_number" id={player.number}>
            {"#" + player.number}
          </h3>
        </div>
      </div>
    </>
  );
}
