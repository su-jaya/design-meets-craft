import React, { Component } from "react";
import "./Card.css";
import _ from "lodash";
import { Image, Transformation } from "cloudinary-react";

class CardA extends Component {
  render() {
    let theUser = this.props.theUser;
    if (!theUser) {
      return "Loading...";
    }

    let usertags = [...theUser.tagsCategory, ...theUser.tagsMaterial];

    return (
      <div className="cardContainer mx-auto">
        <div className="cardBanner">
          <Image cloudName="dfksfwvex" publicId={theUser.public_id_ti + ".jpg"}>
            <Transformation width="306" height="175" crop="fill" />
          </Image>
        </div>
        <Image
          cloudName="dfksfwvex"
          publicId={theUser.public_id_bl + ".jpg"}
          className="cardAvatar"
        >
          <Transformation
            crop="thumb"
            width="150"
            height="150"
            gravity="face"
          />
        </Image>
        <div className="cardText">
          <h3 className={this.props.class}> {theUser.brand}</h3>
          <p className="cardSubtitle">{`${theUser.city}, ${
            theUser.country
          }`}</p>
          <p className="cardDescription">{theUser.youinasentence}</p>
          <div className="cardDivider" />
          <div className="cardTags">
            {_.sampleSize(usertags, 7).map((e, idx) => {
              return <p key={idx}>{e}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default CardA;
