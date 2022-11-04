import React from "react";
import { Link } from "react-router-dom";
import Pill from "./Pill"
export default function PillMenu() {
    
    return (
        <>
            <div className="pillContainer">
                <Pill name="Popular" active="active" />
                <Pill name="New" active=""/>
                <Pill name="QB" active=""/>
                <Pill name="RB" active=""/>
                <Pill name="WR" active=""/>
                <Pill name="TE" active=""/>
            </div>
        </>
    )
}