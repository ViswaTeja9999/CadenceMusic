import { Link } from 'react-router-dom';
import React from 'react'
import "../CSS/SongDetails.css";

function SongDetails(props) {
    let artworkimg=props.artworkimage
    let albtitle=props.albumtitle
    let artname=props.artistname
    return (
        <div className="infocontainer">
            <table>
                <td>
                    <tr><Link to="/album"><img className="artworkimg1" src={artworkimg} alt="Artwork"/></Link></tr>
                    <tr><h2>{albtitle}</h2></tr>
                    <tr><h2>{artname}</h2></tr>
                </td>
            </table>
        </div>
    )
}

export default SongDetails
