import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Header extends Component {
  render() {
    let authButtonStatus;
    if (this.props.loggedIn) {
      authButtonStatus = "loggedIn";
    } else if (this.props.button === "cancel") {
      authButtonStatus = "cancel";
    } else if (this.props.button === "none") {
      authButtonStatus = "none";
    } else {
      authButtonStatus = "signup";
    }

    return (
      <Container fluid>
        <Row>
          <Col />
          <Col>
            <Link to="/">
              <img
                src="../images/dmc_logo.png"
                alt="design-meets-craft logo"
                height="140em"
              />
            </Link>
          </Col>
          <Col className="authbuttons">
            <AuthButtons
              setUser={this.props.setUser}
              authButtonStatus={authButtonStatus}
              loggedIn={this.props.loggedIn}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Header;
