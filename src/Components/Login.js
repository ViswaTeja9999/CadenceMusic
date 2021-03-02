import React from 'react'
import "../CSS/Login.css";

function Login() {
    return (
        <div className="container1">
        <div className="title2">
            <label>Sign in</label>
        </div>
        <form className="loginform" noValidate>
          <label>Email:</label>
          <input className="inputform1"
            autoComplete="email"
            autoFocus
            placeholder="Email Address"
            required
          />
          <label>Password:</label>
          <input className="inputform1"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <button className="button2" type="submit">
            Sign In
          </button>
        </form>
      </div>
    )
}

export default Login
