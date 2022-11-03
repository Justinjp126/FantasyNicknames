import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Player from "../components/Player"
import { db } from "../firebase"
import { ref, onValue } from "firebase/database";

export default function PopularPlayers(namesList) {
    const [names, setNames] = useState([])
 
    useEffect(() => {
    onValue(ref(db), snapshot => {
        const data = snapshot.val();
        if(data !== null) {
        Object.values(data).map((names) => {
            setNames(oldArray => [...oldArray, names])
        });
        }
    })
    }, [])

    function getPlayerLink(player) {
        var playerName = player.split(" ")
        return "/player?searchBar=" + playerName[0] + "+" + playerName[1];
    }

    function addTransition() {
        let div = document.getElementById("popularPlayerDiv");
        div.classList.add("fade-in");

    }

    if (names.length) {
         return (
        <>
            <div className="popularPlayers transitionPlayers" id="popularPlayerDiv" onLoad={addTransition}>
                <Link to={getPlayerLink("Josh Allen")}>
                <Player items={names.find(n => n.name === "Josh Allen")}></Player>
                </Link>
                <Link to={getPlayerLink("Cooper Kupp")}>
                <Player items={names.find(n => n.name === "Cooper Kupp")}></Player>
                </Link>
                <Link to={getPlayerLink("Josh Jacobs")}>
                <Player items={names.find(n => n.name === "Josh Jacobs")}></Player>
                </Link>
                <Link to={getPlayerLink("Stefon Diggs")}>
                <Player items={names.find(n => n.name === "Stefon Diggs")}></Player>
                </Link>
                <Link to={getPlayerLink("Lamar Jackson")}>
                <Player items={names.find(n => n.name === "Lamar Jackson")}></Player>
                </Link>
                <Link to={getPlayerLink("Jalen Hurts")}>
                <Player items={names.find(n => n.name === "Jalen Hurts")}></Player>
                </Link>
                <Link to={getPlayerLink("Travis Kelce")}>
                <Player items={names.find(n => n.name === "Travis Kelce")}></Player>
                </Link>
                <Link to={getPlayerLink("Tyreek Hill")}>
                <Player items={names.find(n => n.name === "Tyreek Hill")}></Player>
                </Link>
            </div>
        </>
        ) 
    } else {
        return (
           <div className="loadingScreen">
           </div>
        )
    }   
}