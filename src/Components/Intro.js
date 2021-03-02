import React from 'react'
import "../CSS/Intro.css";
import imac from "../Assets/imac.png"
import macbook from "../Assets/MacBookPro.png"
import Cadencelogo from "../Assets/Cadencelogo.png"

function Intro() {
    return (
        <div className="introcontainer">
            <div className="titext">
            <h1 className="bigtitle"><img className="logo20" src={Cadencelogo} alt="logo"/> Music</h1>
            <h2 className="caption">Stream Music Like Never Before</h2>
            </div>
            <div className="imcontainer">
            <img className="oneim" src={imac} alt="img1"/>
            <img className="twoim"src={macbook} alt="img2"/>
            </div>
        </div>
    )
}

export default Intro
