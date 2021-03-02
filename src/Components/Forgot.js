import React from 'react'

function Forgot() {
    return (
        <div>
            <div className="container1">
        <div className="title2">
            <label>Forgot Password</label>
        </div>
        <form className="loginform" noValidate>
          <label>Email:</label>
          <input className="inputform1"
            autoComplete="email"
            autoFocus
            placeholder="Email Address"
            required
          />
          <button className="button2" type="submit">
            Send Email
          </button>
        </form>
      </div>
        </div>
    )
}

export default Forgot
