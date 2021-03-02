import React from 'react'
import "../CSS/Browse.css";
import Button from "@material-ui/core/Button"
import SearchIcon from '@material-ui/icons/Search';
import { orange } from '@material-ui/core/colors';

function Browse() {
    return (
        <div className="uicontainer4">
        <div className="pageheading">
           <h2>Search Music</h2>
           </div>
            <div className="searchfield">
               <input type="text" placeholder="Search Cadence Music"></input>
               <Button><SearchIcon  style={{ color: orange[500] }}/></Button>
            </div>
        </div>
    )
}

export default Browse
