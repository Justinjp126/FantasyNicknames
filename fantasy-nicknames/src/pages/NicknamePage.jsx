import React, { useState, useEffect } from "react";
import Nickname from "../components/Nickname"
import Header from "../components/Header"
import Search from "../components/Search"
import PlayerSmall from "../components/PlayerSmall"
import { useSearchParams } from "react-router-dom";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { db } from "../firebase"
import { ref } from "firebase/database";

export default function NicknamePage() {
  //put names into array
  var namesArray = []
  var nicknamesArray = []
  const [searchParams] = useSearchParams()
  var input = searchParams.get("searchBar");
  var playerName = input

  const dbRef = ref(db, "/" + input);
  const products = useDatabaseSnapshot(["/" + input], dbRef);

  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  // DataSnapshot
  const playerObject = products.data;
  const json = (JSON.stringify(playerObject))
  const jsonParse = JSON.parse(json);
  let children = [];
  let nicknamesNewArray = []
  // Iterate the values in order and add an element to the array
  playerObject.forEach((childSnapshot) => {
    if (typeof childSnapshot.val() == "object") {
      for (var i = 0; i < childSnapshot.val().length; i++) {
        nicknamesNewArray.push(childSnapshot.val()[i]);
      }
    }
  });



  return (
    <>
      <section>
        <Header />
        <Search />
        <PlayerSmall items={playerName} />
      </section>
      <Nickname key={playerName} items={jsonParse} />
    </>
    
  );
}
