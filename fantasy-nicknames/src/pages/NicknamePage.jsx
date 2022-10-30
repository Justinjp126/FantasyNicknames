import React, { useState, useEffect } from "react";
import Nickname from "../components/Nickname"
import Header from "../components/Header"
import Search from "../components/Search"
import fantasyNicknames from "../fantasy-nicknames.json"
import PlayerSmall from "../components/PlayerSmall"
import { useSearchParams } from "react-router-dom";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { db } from "../firebase"
import { ref } from "firebase/database";

export default function NicknamePage(props) {
  //put names into array
  var namesArray = []
  var nicknamesArray = []
  const [searchParams] = useSearchParams()
  var input = searchParams.get("searchBar");

  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })
  
  const namesArrayLowercase = namesArray.map(name => name.toLowerCase());
  const inputLowercase = input.toLowerCase();

  if(namesArrayLowercase.includes(inputLowercase)) {
    for(var i = 0; i < namesArrayLowercase.length; i++) {
      if(namesArrayLowercase[i] == inputLowercase) {
        var playerName = namesArray[i]
      }
    }
  }

  //grab each player using name as key
  for(var i = 0; i < namesArray.length; i++) {
    const name = namesArray[i]
    nicknamesArray.push((fantasyNicknames[name]))
  }


  //  const [names, setNames] = useState([])
 
  //   useEffect(() => {
  //   onValue(ref(db), snapshot => {
  //       const data = snapshot.val();
  //       if(data !== null) {
  //       Object.values(data).map((names) => {
  //           setNames(oldArray => [...oldArray, names])
  //       });
  //       }
  //   })
  //   }, [])


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
      <main>
        <Header />
        <Search />
        <PlayerSmall items={playerName} />
      </main>
      <Nickname key={playerName} items={jsonParse} />
    </>
    
  );
}
