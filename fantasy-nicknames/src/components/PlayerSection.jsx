import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Player from "../components/Player";
import { db } from "../firebase";
import { ref, onValue, get } from "firebase/database";

export default function PlayerSection() {
  let location = useLocation();
  let path = location.pathname;

  const [names, setNames] = useState([]);

  useEffect(() => {
    onValue(ref(db, "names"), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((names) => {
          setNames((oldArray) => [...oldArray, names]);
        });
      }
    });
  }, []);

  function getPlayerLink(player) {
    var playerName = player.split(" ");
    return "/player?searchBar=" + playerName[0] + "+" + playerName[1];
  }

  function addTransition() {
    let div = document.getElementById("popularPlayerDiv");
    div.classList.add("fade-in");
  }

  function getPlayers(playerName) {
    return (
      <Link to={getPlayerLink(playerName)}>
        <Player items={names.find((n) => n.name === playerName)}></Player>
      </Link>
    );
  }

  if (names.length) {
    if (path.includes("popular") || path == "/") {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("Joe Mixon")}
            {getPlayers("Cooper Kupp")}
            {getPlayers("Josh Jacobs")}
            {getPlayers("Stefon Diggs")}
            {getPlayers("Alvin Kamara")}
            {getPlayers("Jalen Hurts")}
            {getPlayers("Travis Kelce")}
            {getPlayers("Tyreek Hill")}
          </div>
        </>
      );
    } else if (path.includes("new")) {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("George Pickens")}
            {getPlayers("D'Andre Swift")}
            {getPlayers("Elijah Mitchell")}
            {getPlayers("Kenny Pickett")}
            {getPlayers("Jaylen Waddle")}
            {getPlayers("Kyle Pitts")}
          </div>
        </>
      );
    } else if (path.includes("qb")) {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("Tom Brady")}
            {getPlayers("Justin Herbert")}
            {getPlayers("Patrick Mahomes")}
            {getPlayers("Lamar Jackson")}
            {getPlayers("Jalen Hurts")}
            {getPlayers("Joe Burrow")}
          </div>
        </>
      );
    } else if (path.includes("wr")) {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("Cooper Kupp")}
            {getPlayers("Ja'Marr Chase")}
            {getPlayers("Stefon Diggs")}
            {getPlayers("Davante Adams")}
            {getPlayers("Deebo Samuel")}
            {getPlayers("CeeDee Lamb")}
            {getPlayers("Tyreek Hill")}
            {getPlayers("AJ Brown")}
          </div>
        </>
      );
    } else if (path.includes("te")) {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("Kyle Pitts")}
            {getPlayers("George Kittle")}
            {getPlayers("Travis Kelce")}
            {getPlayers("Mark Andrews")}
          </div>
        </>
      );
    } else if (path.includes("rb")) {
      return (
        <>
          <div
            className="popularPlayers transitionPlayers"
            id="popularPlayerDiv"
            onLoad={addTransition}
          >
            {getPlayers("Johnathan Taylor")}
            {getPlayers("Christian McCaffrey")}
            {getPlayers("Derrick Henry")}
            {getPlayers("Dalvin Cook")}
            {getPlayers("Austin Ekeler")}
            {getPlayers("Joe Mixon")}
            {getPlayers("Najee Harris")}
            {getPlayers("Alvin Kamara")}
          </div>
        </>
      );
    }
  } else {
    return <div className="loadingScreen"></div>;
  }
}
