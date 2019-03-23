import React, { Component } from "react";
import "./Profile.css";

class ProfileCard extends Component {
  render() {
    return (
      <div className="profileBox">
        <img
          className="profileAvatar"
          src="./images/avatar_test.jpg"
          alt="card avatar"
        />
        <h1 className="profileBoxHeadline">Adam French</h1>
        <p className="profileBoxSubtitle">Designer from France</p>
        <p className="profileBoxDesc">
          Hi, my name is Adam French. I'm a Paris based Fashion Designer. I
          started my own brand called "The French Connection" in 2009. Lorem
          ipsum dolor sit amet, consetetur sadipscing elitr.
        </p>
        <div className="profileBoxLinks">
          <p>Mailbox</p>
          <p>Contact Info</p>
          <p>Account Settings</p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
