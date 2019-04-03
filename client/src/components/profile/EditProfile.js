import React, { Component } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import Footer from "../Footer";
import "./EditProfile.css";

class EditProfile extends Component {
  render() {
    console.log(this.props.userInSession);

    return (
      <div>
        <Header
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />

        <div className="underConstruction">
          <h1>Under Construction</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default EditProfile;
