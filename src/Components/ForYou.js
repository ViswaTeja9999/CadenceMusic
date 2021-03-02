import React from 'react'
import "../CSS/ForYou.css";
import Row from "./Row";

function ForYou() {
    return (
        <div className="uicontainer2">
        <div className="pageheading">
           <h2>Curated For You</h2>
        </div>
            <div className="container100">
             <Row rowtitle={"Top This Week"}/>
             <Row rowtitle={"Recommended Songs"}/>
             <Row rowtitle={"Recommended Playlists"}/>
             <Row rowtitle={"Recommended Albums"}/>
             <Row rowtitle={"New Releases"}/>
            </div>
        </div>
    )
}

export default ForYou
