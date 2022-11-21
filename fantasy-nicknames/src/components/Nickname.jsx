import React, { useState } from "react";
import { db } from "../firebase";
import { ref, onValue, get } from "firebase/database";

export default function Nickname(props) {
  const nicknamesObj = Object.values(props.items.nicknames);
  var nicknamesArray = [];
  var upvoteCounterArray = [];
  for (var i = 0; i < nicknamesObj.length; i++) {
    nicknamesArray.push(nicknamesObj[i][0]);
  }
  for (var i = 0; i < nicknamesObj.length; i++) {
    upvoteCounterArray.push(0);
  }
  const [counters, setCounters] = useState(upvoteCounterArray);
  const setCount = (index, newCounter) => {
    const newCounters = Object.assign([], counters);
    newCounters[index] = newCounter;
    setCounters(newCounters);
  };
  // const upvote = ({ index, counter, setCount }) => {
  //     {nicknamesArray.map((nickname) => (
  //           <div className="nickname-container">
  //             <li className="nickname__ol_li">
  //               <span className="nickname__ol_li-name" index={index}>
  //                 {nickname}
  //               </span>
  //               <div className="nickname__ol_li-upvoteContainer">
  //                 <img
  //                   src="src/images/arrow.svg"
  //                   alt="Upvote"
  //                   className="nickname__ol_li-upvote"
  //                 />
  //                 <span className="nickname__ol_li-upvoteCount">0</span>
  //               </div>
  //             </li>
  //           </div>
  //         ))}
  //   );
  // };

  const Upvote = ({ index, counter, setCount }) => {
    return (
      <div>
        <div className="nickname-container">
          <li className="nickname__ol_li">
            <span className="nickname__ol_li-name" index={index}>
              {nicknamesArray[index]}
            </span>
            <div className="nickname__ol_li-upvoteContainer">
              <img
                src="src/images/arrow.svg"
                alt="Upvote"
                className="nickname__ol_li-upvote"
                onClick={() => setCount(index, counter + 1)}
              />
              <span className="nickname__ol_li-upvoteCount">{counter}</span>
            </div>
          </li>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="nickname">
        <ol className="nickname__ol" id={props.items}>
          <div>
            {counters.map((counter, index) => (
              <Upvote index={index} counter={counter} setCount={setCount} />
            ))}
          </div>
        </ol>
      </div>
    </>
  );
}
