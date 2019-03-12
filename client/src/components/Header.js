import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import "../Header.css";

class Header extends Component {
  render() {
    let authButtonStatus;
    if (
      this.props.url === "/signup" ||
      this.props.url === "/aboutyou" ||
      this.props.url === "/needs"
    ) {
      authButtonStatus = "cancel";
    } else {
      authButtonStatus = "signup";
    }

    return (
      <div className="headerContainer">
        <div className="headerEmptyDiv" />
        <div>
          <Link to="/">
            <img
              src="./images/dmc_logo.png"
              alt="design-meets-craft logo"
              height="140em"
            />
          </Link>
        </div>
        <AuthButtons authButtonStatus={authButtonStatus} />
      </div>
    );
  }
}

export default Header;
