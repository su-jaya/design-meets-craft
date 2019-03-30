import React, { Component } from "react";
import "./Profile.css";
// import cloudinary from "cloudinary-core";

class ProfileCard extends Component {
  render() {
    //CROP IMAGE
    //  /w_300,h_300,c_thumb,g_face
    // var cl = new cloudinary.Cloudinary({
    //   cloud_name: "dfksfwvex",
    //   secure: true
    // });

    // var tag = cl.imageTag("/v1553861073/thing-gallery/IMG_1473.jpg", {
    //   width: 300,
    //   height: 300,
    //   crop: "thumb",
    //   gravity: "face"
    // });
    // tag.toHtml();

    // console.log(tag.toHtml());

    let theUser = this.props;
    return (
      <div className="profileBox">
        <img
          className="profileAvatar"
          src={theUser.brandLogo}
          alt="card avatar"
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
