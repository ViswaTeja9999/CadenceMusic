import React from 'react'
import "../CSS/YourLibrary.css"
import Row from "./Row";

function YourLibrary() {
    return (
        <div className="uicontainer3">
          <div className="pageheading">
           <h2>Library</h2>
           </div>
            <div className="container100">
             <Row rowtitle={"Albums"}/>
             <Row rowtitle={"Your Playlists"}/>
             <Row rowtitle={"Cadence Playlists"}/>
            </div>
        </div>
    )
}

export default YourLibrary
