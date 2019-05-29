import React, { Component } from "react";
import "./Profile.css";
import Header from "../Header";
import NavBar from "../NavBar";
import Watchlist from "./Watchlist";
import MyMatches from "./MyMatches";
import MyShowroom from "./MyShowroom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import ProfileCard from "./ProfileCard";
import Footer from "../Footer";
import { withRouter } from "react-router";

class Profile extends Component {
  state = {
    active: "watchlist"
  };

  selectWatchlist() {
    this.setState({
      active: "watchlist"
    });
  }

  selectMyMatches() {
    this.setState({
      active: "mymatches"
    });
  }

  selectMyShowroom() {
    this.setState({
      active: "myshowroom"
    });
  }

  test() {
    console.log("worked");
  }

  render() {
    let theUser = this.props.userInSession;
    let activeComponent;

    if (this.state.active === "watchlist") {
      activeComponent = <Watchlist />;
    } else if (this.state.active === "mymatches") {
      activeComponent = <MyMatches theUser={this.props.userInSession} />;
    } else if (this.state.active === "myshowroom") {
      activeComponent = <MyShowroom theUser={this.props.userInSession} />;
    }

    return (
      <div>
        <Header
          url={this.props.match.url}
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />

        {/* Banner */}
        <div className="profileBanner">
          <img
            src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_400,w_1440,c_fill/v1/${
              theUser.public_id_ti
            }.jpg`}
            alt="public profile"
          />
        </div>

        {/* Profile Box */}
        <div className="profileBoxPosition">
          <ProfileCard {...theUser} />
        </div>

        {/* Profile NavBar */}

        <div className="profileNavBar">
          <Navbar expand="lg">
            <Nav>
              <Nav.Link onClick={() => this.selectWatchlist()}>
                Watchlist
              </Nav.Link>
              <Nav.Link onClick={() => this.selectMyMatches()}>
                My Matches
              </Nav.Link>
              <Nav.Link onClick={() => this.selectMyShowroom()}>
                My Showroom
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>

        {/* Watchlist */}

        {activeComponent}

        <div className="homeDivider" />

        <Footer />
      </div>
    );
  }
}

export default withRouter(Profile);
