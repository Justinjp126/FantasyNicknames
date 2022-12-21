import React, { useState } from "react";
import { db } from "../firebase";
import { ref, runTransaction } from "firebase/database";

export default function Upvote({
  index,
  counter,
  setCount,
  nicknamesArray,
  playerName,
}) {
  function handleClick(event) {
    event.target.classList.toggle("upvote-active");
    const upvoteRef = ref(db, "/names/" + playerName + "/nicknames/" + index);
    runTransaction(upvoteRef, (upvote) => {
      if (upvote && event.target.classList.contains("upvote-active")) {
        upvote[1]++;
        setCount(index, counter + 1);
      } else if (upvote && !event.target.classList.contains("upvote-active")) {
        upvote[1]--;
        setCount(index, counter - 1);
      }
      return upvote;
    });
    //location.reload();
  }

  return (
    <div>
      <div className="nickname-container">
        <li className="nickname__ol_li">
          <span className="nickname__ol_li-counter">{index + 1}</span>
          <span className="nickname__ol_li-name" index={index}>
            {nicknamesArray[index]}
          </span>
          <div className="nickname__ol_li-upvoteContainer">
            <img
              src="svg/arrow.svg"
              alt="Upvote"
              className="nickname__ol_li-upvote"
              disabled={db.isLoading}
              onClick={handleClick}
              id={`${playerName}-id`}
            />
            <span className="nickname__ol_li-upvoteCount">{counter}</span>
          </div>
        </li>
      </div>
    </div>
  );
}
