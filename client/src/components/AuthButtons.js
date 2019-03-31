import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./AuthButtons.css";
// import AuthService from "./signup/auth-service";

class AuthButtons extends Component {
  // state = {
  //   loggedInUser: ""
  // };

  // service = new AuthService();

  // handleLogOut = () => {
  //   this.service.logout().then(() => {
  //     console.log("ok!");
  //     this.setState({ loggedInUser: null });
  //     // this.props.getUser(null);
  //   });
  // };

  render() {
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
          <button onClick={this.handleLogOut}>log out</button>
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
    } else if (this.props.authButtonStatus === "cancel") {
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
    } else {
      dynamicbutton = <div className="headerEmptyDiv" />;
    }
    return (
      <div>
        {/* {this.state.loggedInUser === null ? <Redirect push to="/" /> : ""} */}
        {dynamicbutton}
      </div>
    );
  }
}

export default AuthButtons;
