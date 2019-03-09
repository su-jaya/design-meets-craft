import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import "../Header.css";

class Header extends Component {
  render() {
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
        <AuthButtons />
      </div>
    );
  }
}

export default Header;
