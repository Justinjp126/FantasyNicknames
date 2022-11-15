import React, { useState, useEffect } from "react";
import Nickname from "../components/Nickname";
import Header from "../components/Header";
import Search from "../components/Search";
import PlayerSmall from "../components/PlayerSmall";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { db } from "../firebase";
import { ref } from "firebase/database";
import Fuse from "fuse.js";
import PillMenu from "../components/PillMenu";
export default function NicknamePage() {
  /*
  Take input using useSearchParams
  Load in database and give the list to Fuse.js
  as the all the keys in the database
  Let Fuse.js search through that array and find 
  the closest match, which will be the first index
  based on the the options variable
  Send in parameter as object taken as the name 
  from Fuse.js
  */
  const [searchParams] = useSearchParams();
  var input = searchParams.get("searchBar");

  const dbRef = ref(db, "/names");
  const products = useDatabaseSnapshot(["/names"], dbRef);
  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  const playerObject = products.data;
  const json = JSON.stringify(playerObject);
  const jsonParse = JSON.parse(json);
  const options = {
    shouldSort: true,
  };
  const fuse = new Fuse(Object.keys(jsonParse), options);
  const result = fuse.search(input);
  const playerName = result[0].item;
  const sortedPlayerObject = jsonParse[playerName];

  return (
    <>
      <main>
        <Header />
        <section className="nickname-wrapper">
          <div className="nicknameSection">
            <div className="playerLeft">
              <Search />
              <div className="pillMenu">
                <PillMenu />
              </div>
              <div className="playerLeft__card">
                <PlayerSmall items={playerName} />
              </div>
            </div>
            <div className="playerRight">
              <Nickname key={playerName} items={sortedPlayerObject} />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
