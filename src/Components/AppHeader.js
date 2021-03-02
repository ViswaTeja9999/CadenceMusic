import React from 'react'
import {Link}from "react-router-dom";
import Cadencelogo from "../Assets/Cadencelogo.png"
import "../CSS/AppHeader.css";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




function AppHeader() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
           <div>
            <nav className="header2">
                <div className="titleimg">
                <img src={Cadencelogo} alt="logo"/>
                </div>
                <div className="buttoncontainer">
                <div>
                <Link to="/home"><button className="button3">Home</button></Link>
                <Link to="/yourlibrary"><button className="button3">Your Library</button></Link>
                <Link to="/foryou"><button className="button3">For You</button></Link>
                <Link to="/browse"><button className="button3">Browse</button></Link>
                </div>
                </div>
                <div className="profileicon">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircleOutlinedIcon fontSize="large" style={{ color: "#e1f5fe" }}/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
            </nav>
        </div>
        </div>
    )
}

export default AppHeader
