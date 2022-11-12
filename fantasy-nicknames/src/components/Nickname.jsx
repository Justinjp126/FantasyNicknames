import React from "react";

export default function Nickname(props) {
  const nicknamesObj = Object.values(props.items.nicknames);
  var nicknamesArray = [];
  for (var i = 0; i < nicknamesObj.length; i++) {
    nicknamesArray.push(nicknamesObj[i][0]);
  }
  // const nicknamesArrayNew = nicknamesArray

  return (
    <>
      <div className="nickname">
        <ol className="nickname__ol" id={props.items}>
          {nicknamesArray.map((nickname) => (
            <li className="nickname__ol_li">{nickname}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
