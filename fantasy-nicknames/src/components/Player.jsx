import React from "react";
export default function Player(props) {
  if (props.items !== "loadingMainPage" || typeof props.items !== "undefined") {
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
    var teamName = team;
    if (team == "49ers") {
      teamName = "fourtyniners";
    }
    return (
      <>
        <div className={`player-wrapper ${teamName}`}>
          <div className="player">
            <div className="player__picture">
              <div
                className="player__picture_img"
                id={props.items.name + " img"}
              >
                <picture>
                  <source srcSet={`logos/${team}-min.webp`} type="image/webp" />
                  <source srcSet={`logos/${team}-min.png`} type="image/png" />
                  <img
                    src={`logos/${team}-min.png`}
                    alt={`${team} Logo`}
                    className="player__picture_logo"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={`playerHeadshots/${playerURL}.webp`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`playerHeadshots/${playerURL}.png`}
                    type="image/png"
                  />
                  <img
                    src={`playerHeadshots/${playerURL}.png`}
                    className="player__picture_img"
                    alt="Player Image"
                  />
                </picture>
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
