import React from "react";
import Header from "../components/Header"
import Search from "../components/Search";
import Player from "../components/Player";
import fantasyNicknames from "../fantasy-nicknames.json"
import { Link } from "react-router-dom";
export default function MainPage() {

  function getPlayerLink(player) {
    var playerName = player.split(" ")
    return "/player?searchBar=" + playerName[0] + "+" + playerName[1];
  }

  return (
    <>
      <main>
        <Header />
        <Search />
        <div className="mainText">
          <h1 className="mainText__title">Popular Players</h1>
          <p className="mainText__text">Or search for your favorite players</p>
        </div>
      </main>
      <Link to={getPlayerLink("Josh Allen")}>
        <Player items={fantasyNicknames["Josh Allen"]}></Player>
      </Link>
      <Link to={getPlayerLink("Cooper Kupp")}>
        <Player items={fantasyNicknames["Cooper Kupp"]}></Player>
      </Link>
      <Link to={getPlayerLink("Stefon Diggs")}>
        <Player items={fantasyNicknames["Stefon Diggs"]}></Player>
      </Link>
      <Link to={getPlayerLink("Lamar Jackson")}>
        <Player items={fantasyNicknames["Lamar Jackson"]}></Player>
      </Link>
      <Link to={getPlayerLink("Jalen Hurts")}>
        <Player items={fantasyNicknames["Jalen Hurts"]}></Player>
      </Link>
      
    </>
    
  );
}
