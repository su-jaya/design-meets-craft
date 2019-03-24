import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./AuthButtons.css";

class AuthButtons extends Component {
  render() {
    // console.log(this.props.authButtonStatus);
    let dynamicbutton;
    if (this.props.authButtonStatus === "loggedIn") {
      dynamicbutton = (
        <div className="authButtons">
          <Link to="/profile">
            <img
              src="/images/DmC_alarmicon.png"
              alt="alarm icon"
              width="25em"
            />
            <img
              className="authButtonsAvatar"
              src="/images/avatar_test.jpg"
              alt="avatar"
              width="45em"
            />
            <img
              src="/images/DmC_arrowicon.png"
              alt="alarm icon"
              width="15em"
            />
          </Link>
        </div>
      );
    } else if (this.props.authButtonStatus === "signup") {
      dynamicbutton = (
        <div className="authButtons">
          <Link to="/login">
            <button className="authButtonsLogin">Login</button>
          </Link>
          <Link to="/signup">
            <button className="authButtonsSignUp">SIGN UP NOW</button>
          </Link>
        </div>
      );
    } else {
      dynamicbutton = (
        <div className="authButtons">
          <Link to="/login">
            <button className="authButtonsLogin">Login</button>
          </Link>
          <Link to="/">
            <button className="authButtonsSignUp">CANCEL</button>
          </Link>
        </div>
      );
    }
    return <div>{dynamicbutton}</div>;
  }
}

export default AuthButtons;
