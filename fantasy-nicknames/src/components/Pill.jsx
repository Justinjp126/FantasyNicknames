import React from "react";
import { useLocation } from "react-router-dom";
export default function Options(props) {
  const pills = document.getElementsByClassName("pill");
  let location = useLocation();
  let path = location.pathname;
  let classUpdate = "pill";
  if (path.includes(props.name.toLowerCase())) {
    classUpdate = "pill pillActive";
  } else if ((path == "/") & (props.name == "Popular")) {
    classUpdate = "pill pillActive";
  }
  const handleClick = (event) => {
    for (var i = 0; i < pills.length; i++) {
      pills[i].classList.remove("pillActive");
    }
    event.target.classList.add("pillActive");
  };
  return (
    <>
      <button onClick={handleClick} className={classUpdate}>
        {props.name}
      </button>
    </>
  );
}
