import React from "react";
export default function Player(props) {
  if (props.items !== "loadingMainPage") {
    var playerName = props.items.name;
    var firstInitial = playerName.substring(0, 1);
    var lastName = playerName.substring(
      playerName.indexOf(" ") + 1,
      playerName.length
    );
    var playerURL = (firstInitial + "_" + lastName).toLowerCase();
    var team = props.items.team
      .substring(props.items.team.indexOf(",") + 1)
      .toLowerCase()
      .trim();
    return (
      <>
        <div className="player-wrapper">
          <div className="player">
            <div className="player__picture">
              <div
                className="player__picture_img"
                id={props.items.name + " img"}
              >
                <img
                  src={`src/images/logos/${team}-min.png`}
                  alt={`${team} Logo`}
                  className="player__picture_logo"
                />
                <img
                  className="player__picture_img"
                  src={`src/images/${playerURL}.png`}
                  alt=""
                />
              </div>
            </div>
            <div className="player__info">
              <h2 className="player__info_name" id={props.items.name}>
                {props.items.name}
              </h2>
              <h4 className="player__info_type" id={props.items.type}>
                {props.items.type}
              </h4>
              <h3 className="player__info_number" id={props.items.number}>
                {"#" + props.items.number}
              </h3>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    var props = {
      items: {
        key: 0,
        name: "LOADING",
        number: 0,
        type: "NA",
      },
    };

    return <h1>Loading</h1>;
  }
}
