import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import "../NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link to="/">Discover</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Designer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Artisan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/aboutus">About us</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Design for Good</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Shop</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Journal</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavBar;
