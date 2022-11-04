import React from "react";
export default function Options(props) {
   return (
    <>
       <button class="pill" data-pill-active={props.active}>{props.name}</button> 
    </>
  );
}
