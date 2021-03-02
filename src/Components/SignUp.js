import React from 'react'
import "../CSS/SignUp.css"

function Signup() {
    return (
        <div>
          <div className="container1">
        <div className="title2">
            <label>Sign Up</label>
        </div>
        <form className="loginform" noValidate>
        <div className="namecontainer">
        <label>First Name:</label>
          <input className="inputform1"
            placeholder="First Name"
            required
          />
          <label>Last Name:</label>
          <input className="inputform1"
            placeholder="Last Name"
            required
          />
          </div>
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
        <label>Confirm Password:</label>
          <input className="inputform1"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            required
          />
          <button className="button2" type="submit">
            Create Your Account
          </button>
        </form>
      </div>
        </div>
    )
}

export default Signup
