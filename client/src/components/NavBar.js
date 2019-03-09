import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link>Discover</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Designer</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Artisans</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About us</Nav.Link>
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
