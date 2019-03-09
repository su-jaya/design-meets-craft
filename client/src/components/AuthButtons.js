import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../AuthButtons.css";

class AuthButtons extends Component {
  render() {
    return (
      <div className="authButtons">
        <button>Log In</button>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    );
  }
}

export default AuthButtons;
