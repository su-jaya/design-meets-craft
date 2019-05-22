import React, { Component } from "react";
import "./Profile.css";

class ProfileCard extends Component {
  render() {
    let theUser = this.props;

    return (
      <div className="profileBox">
        <img
          className="profileAvatar"
          src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_350,w_350,g_face/v1/${
            theUser.public_id_bl
          }.jpg`}
          alt="public profile"
        />

        <h1 className="profileBoxHeadline">
          {`${theUser.firstName} ${theUser.lastName}`}
        </h1>
        <p className="profileBoxSubtitle">{theUser.position}</p>
        <p className="profileBoxDesc">{theUser.youinasentence}</p>
        <div className="profileBoxLinks">
          <p>
            <img
              className="profileEditIcon"
              src="../images/DmC_mailicon.png"
              alt="mail icon"
              width="20em"
            />
            Mailbox
          </p>
          <p>
            <img
              className="profileEditIcon"
              src="../images/DmC_chaticon.png"
              alt="mail icon"
              width="20em"
            />
            Contact Info
          </p>
          <p>
            <img
              className="profileEditIcon"
              src="../images/DmC_settingsicon.png"
              alt="mail icon"
              width="20em"
            />
            Account Settings
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
