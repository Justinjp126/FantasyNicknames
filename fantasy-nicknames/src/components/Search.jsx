import React, { useState } from "react";
import fantasyNicknames from "../fantasy-nicknames.json"
import Options from "./Options";
import { Form } from "react-router-dom"

export default function Search({addPlayer}) {
  var namesArray = []
  const [player, setPlayer] = useState("")

  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })
  const names = namesArray.map((items) => {
    return (
      <Options 
      key={items}
      items={items}
      />
    )
  })

  const handleChange = (event) => {
      setPlayer(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer(player);
    setPlayer("");
  };

  return (
    <>
      <Form method="get" action="/player"  >
        <div className="searchBarContainer">
          <input autoComplete="off" placeholder="Enter Player Name" list="search_bar" name="searchBar" id="searchBar" className="search" />
          <input type="image" src="src/images/search.svg" alt="Search Icon" className="searchBarContainer__icon" />
        </div>
        <datalist id="search_bar" name="datalist">
          {names}
        </datalist>
      </Form>       
    </>
    
  );
}
