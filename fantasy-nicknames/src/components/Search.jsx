import React from "react";
import fantasyNicknames from "../fantasy-nicknames.json"
import Options from "./Options";
export default function Search() {
  var namesArray = []
  Object.keys(fantasyNicknames).forEach(function(key,index) {
    namesArray.push(key)
  })
  const names = namesArray.map((items) => {
    return (
      <Options 
      items={items}
      />
    )
  })

  return (
    <>
    <form action="">
      <div className="searchBarContainer">
        <input placeholder="Enter Player Name" list="search_bar" name="searchBar" id="searchBar" className="search" />
        <img src="src/images/search.svg" alt="Search Icon" className="searchBarContainer__icon" />
      </div>
      <datalist id="search_bar">
        {names}
      </datalist>
    </form>
          
    </>
    
  );
}
