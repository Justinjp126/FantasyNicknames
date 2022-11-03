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
  //put names into array
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
  //new code start
  const fuse = new Fuse(Object.keys(jsonParse), options)
  const result = fuse.search(input);
  const playerName = result[0].item
  const sortedPlayerObject = jsonParse[player]

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
