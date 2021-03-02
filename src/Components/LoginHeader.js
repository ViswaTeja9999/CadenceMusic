import React from 'react'
import { Link } from 'react-router-dom'
import "../CSS/LoginHeader.css";

function LoginHeader() {
    return (
        <div>
            <nav className="header1">
                <div className="title1">
                </div>
                <div className="buttoncontainer">
                <Link to="/"><button className="button1">About</button></Link>
                <Link to="/signin"><button className="button1">Login</button></Link>
                <Link to="/signup"><button className="button1">Sign Up</button></Link>
                <Link to="/forgot"><button className="button1">Forgot Password</button></Link>
                </div>
            </nav>
        </div>
    )
}

export default LoginHeader
