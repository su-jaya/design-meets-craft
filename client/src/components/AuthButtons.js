import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./AuthButtons.css";
import AuthService from "./signup/auth-service";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

class AuthButtons extends Component {
  state = {
    loggedInUser: ""
  };

  service = new AuthService();

  handleLogOut = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.setUser(null);
    });
  };

  render() {
    let dynamicbutton;
    if (this.props.authButtonStatus === "loggedIn") {
      dynamicbutton = (
        <div className="authButtons">
          <DropdownButton
            alignRight
            title={
              <div>
                {/* <img
                  src="/images/DmC_alarmicon.png"
                  alt="alarm icon"
                  width="25em"
                /> */}
                <img
                  className="authButtonsAvatar"
                  src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_45,w_45,g_face/v1/${
                    this.props.loggedIn.public_id_bl
                  }.jpg`}
                  alt="public profile"
                />
                <img
                  src="/images/DmC_arrowicon.png"
                  alt="alarm icon"
                  width="15em"
                />
              </div>
            }
          >
            <Dropdown.Item as="li" eventKey="1">
              <Link to="profile">My Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item as="li" eventKey="2">
              <Link to="/editprofile">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Item as="li" eventKey="3">
              <button onClick={this.handleLogOut}>Log out</button>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      );
    } else if (this.props.authButtonStatus === "signup") {
      dynamicbutton = (
        <div className="authButtons">
          <Link to="/login">
            <button className="authButtonsLogin">Login</button>
          </Link>
          <Link to="/signup">
            <button className="authButtonsSignUp">SIGN UP</button>
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
      dynamicbutton = <div />;
    }
    return (
      <div>
        {this.state.loggedInUser === null ? <Redirect push to="/" /> : ""}
        {dynamicbutton}
      </div>
    );
  }
}

export default AuthButtons;
