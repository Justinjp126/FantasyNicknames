import React, { useState, useEffect } from "react";
import Upvote from "../components/Upvote";
export default function Nickname(props) {
  var nicknamesArray = [];
  var upvoteCounterArray = [];

  const nicknamesObj = Object.values(props.items.nicknames);

  for (var i = 0; i < nicknamesObj.length; i++) {
    nicknamesArray.push(nicknamesObj[i][0]);
    upvoteCounterArray.push(nicknamesObj[i][1]);
  }
  const [counters, setCounters] = useState(upvoteCounterArray);
  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };

  return (
    <>
      <div className="nickname">
        <ol className="nickname__ol" id={props.items}>
          <div>
            {counters.map((counter, index) => (
              <Upvote
                index={index}
                counter={counter}
                setCount={setCount}
                nicknamesArray={nicknamesArray}
                playerName={props.items.name}
              />
            ))}
          </div>
        </ol>
      </div>
    </>
  );
}
