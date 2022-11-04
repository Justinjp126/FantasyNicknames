import React, { useState, useEffect } from "react";
import Nickname from "../components/Nickname"
import Header from "../components/Header"
import Search from "../components/Search"
import PlayerSmall from "../components/PlayerSmall"
import { useSearchParams } from "react-router-dom";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { db } from "../firebase"
import { ref } from "firebase/database";
import Fuse from "fuse.js";

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
  const [searchParams] = useSearchParams()
  var input = searchParams.get("searchBar");

  const dbRef = ref(db, "/");
  const products = useDatabaseSnapshot(["/"], dbRef);
  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  const playerObject = products.data;
  const json = (JSON.stringify(playerObject))
  const jsonParse = JSON.parse(json);
  const options = {
    shouldSort: true,
  };
  const fuse = new Fuse(Object.keys(jsonParse), options)
  const result = fuse.search(input);
  const playerName = result[0].item
  const sortedPlayerObject = jsonParse[playerName]

  return (
    <>
      <section>
        <Header />
        <Search />
        <PlayerSmall items={playerName} />
      </section>
      <Nickname key={playerName} items={sortedPlayerObject} />
    </>
    
  );
}
