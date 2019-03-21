import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AuthButtons.css";

class AuthButtons extends Component {
  render() {
    // console.log(this.props.authButtonStatus);
    let dynamicbutton;
    if (this.props.authButtonStatus === "signup") {
      dynamicbutton = (
        <Link to="/signup">
          <button className="authButtonsSignUp">SIGN UP NOW</button>
        </Link>
      );
    } else {
      dynamicbutton = (
        <Link to="/">
          <button className="authButtonsSignUp">CANCEL</button>
        </Link>
      );
    }
    return (
      <div className="authButtons">
        <button className="authButtonsLogin">Login</button>
        {dynamicbutton}
      </div>
    );
  }
}

export default AuthButtons;
