import React from "react";

export default function Nickname(props) {
  const nicknamesArray = Object.values(props.items.nicknames);

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
