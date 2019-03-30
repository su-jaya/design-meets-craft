import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class HomeLoggedInContainer extends Component {
  render() {
    let loggedincontainer;

    if (this.props.designer) {
      loggedincontainer = (
        <div className="homeLoggedInContainer">
          <h2>Welcome to Design meets Craft</h2>
          <p>
            We are using design to inspire change. Design Meets Craft matches
            designers and brands with traditional craft businesses.
          </p>
          <Link to="/artisans">
            <button>FIND AN ARTISAN WHO MATCHES YOUR NEEDS</button>
          </Link>
        </div>
      );
    } else {
      loggedincontainer = (
        <div className="homeLoggedInContainer">
          <h2>Welcome to Design meets Craft</h2>
          <p>
            We are using design to inspire change. Design Meets Craft matches
            designers and brands with traditional craft businesses.
          </p>
          <Link to="/designers">
            <button>FIND A DESIGNER WHO'S LOOKING FOR YOUR SKILLS</button>
          </Link>
        </div>
      );
    }
    return <div>{loggedincontainer}</div>;
  }
}

export default HomeLoggedInContainer;
