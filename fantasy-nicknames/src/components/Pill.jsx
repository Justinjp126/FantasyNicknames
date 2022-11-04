import React, { useState } from "react";
export default function Options(props) {
   const pills = document.getElementsByClassName("pill");

   const handleClick = (event) => {
      for (var i = 0; i < pills.length; i++) {
         pills[i].classList.remove("pillActive")
      }
      event.target.classList.add("pillActive")
      
   };
   return (
    <>
       <button onClick={handleClick} className="pill">{props.name}</button> 
    </>
  );
}
