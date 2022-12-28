import React from "react";
import { Link } from "react-router-dom";
import Pill from "./Pill";
export default function PillMenu() {
  return (
    <>
      <div className="pillContainer">
        <Link to="/popular">
          <Pill name="Popular" />
        </Link>
        <Link to="/new">
          <Pill name="New" active="" />
        </Link>
        <Link to="/qb">
          <Pill name="QB" active="" />
        </Link>
        <Link to="/rb">
          <Pill name="RB" active="" />
        </Link>
        <Link to="/wr">
          <Pill name="WR" active="" />
        </Link>
        <Link to="/te">
          <Pill name="TE" active="" />
        </Link>
      </div>
    </>
  );
}
