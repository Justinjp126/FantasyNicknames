import React from "react";
import { Link } from "react-router-dom";
import Pill from "./Pill"
export default function PillMenu() {
    return (
        <>
            <div className="pillContainer">
                <Pill name="Popular" active="active" />
                <Pill name="New" />
                <Pill name="QB" />
                <Pill name="RB" />
                <Pill name="WR" />
                <Pill name="TE" />
            </div>
        </>
    )
}