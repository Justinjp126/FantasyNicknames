import React from "react";
import Options from "./Options";
import { Form } from "react-router-dom";
import { useDatabaseSnapshot } from "@react-query-firebase/database";
import { db } from "../firebase";
import { ref } from "firebase/database";
export default function Search() {
  const dbRef = ref(db, "/");
  const products = useDatabaseSnapshot(["/"], dbRef);

  if (products.isLoading) {
    return <div>Loading...</div>;
  }
  // DataSnapshot
  const playerObject = products.data;
  const json = JSON.stringify(playerObject);
  const jsonParse = JSON.parse(json);

  var newArray = Object.keys(jsonParse);

  const newName = newArray.map((items) => {
    return <Options key={items} items={items} />;
  });

  return (
    <>
      <Form method="get" action="/player">
        <div className="searchBarContainer">
          <input
            autoComplete="off"
            placeholder="Enter Player Name"
            list="search_bar"
            name="searchBar"
            id="searchBar"
            className="search"
          />
          <input
            type="image"
            src="src/images/search.svg"
            alt="Search Icon"
            className="searchBarContainer__icon"
          />
        </div>
        <datalist id="search_bar" name="datalist">
          {newName}
        </datalist>
      </Form>
    </>
  );
}
