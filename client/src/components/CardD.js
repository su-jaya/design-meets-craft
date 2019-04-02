import React, { Component } from "react";
import "./Card.css";
import _ from "lodash";

class CardD extends Component {
  render() {
    let theUser = this.props.theUser;

    if (!theUser) {
      return "Loading...";
    }

    let usertags = [...theUser.tagsCategory, ...theUser.tagsMaterial];

    return (
      <div className="cardContainer mx-auto">
        <div className="cardBanner">
          <img
            src={theUser.titleImage}
            alt="designer banner"
            width="306px"
            height="175px"
          />
        </div>
        <img className="cardAvatar" src={theUser.brandLogo} alt="card avatar" />
        <div className="cardText">
          <h3 className={this.props.class}>{`${theUser.firstName} ${
            theUser.lastName
          }`}</h3>
          <p className="cardSubtitle">{theUser.position}</p>
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

export default CardD;
