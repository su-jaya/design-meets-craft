import React, { Component } from "react";
import "./Profile.css";
import { Image, Transformation } from "cloudinary-react";

// import cloudinary from "cloudinary-core";

class ProfileCard extends Component {
  render() {
    let theUser = this.props;
    return (
      <div className="profileBox">
        <Image
          className="profileAvatar"
          cloudName="dfksfwvex"
          publicId={theUser.public_id_bl + ".jpg"}
        >
          <Transformation
            width="350"
            height="350"
            gravity="face"
            crop="thumb"
          />
        </Image>

        <h1 className="profileBoxHeadline">
          {`${theUser.firstName} ${theUser.lastName}`}
        </h1>
        <p className="profileBoxSubtitle">{theUser.position}</p>
        <p className="profileBoxDesc">{theUser.youinasentence}</p>
        <div className="profileBoxLinks">
          <p>
            <img
              className="profileEditIcon"
              src="images/DmC_mailicon.png"
              alt="mail icon"
              width="20em"
            />
            Mailbox
          </p>
          <p>
            <img
              className="profileEditIcon"
              src="images/DmC_chaticon.png"
              alt="mail icon"
              width="20em"
            />
            Contact Info
          </p>
          <p>
            <img
              className="profileEditIcon"
              src="images/DmC_settingsicon.png"
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
