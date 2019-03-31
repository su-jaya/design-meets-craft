import React, { Component } from "react";
import "./Card.css";

class CardA extends Component {
  render() {
    let theUser = this.props.theUser;
    if (!theUser) {
      return "Loading...";
    }
    console.log(theUser);

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
          <h3 className={this.props.class}> {theUser.brand}</h3>
          <p className="cardSubtitle">{`${theUser.city}, ${
            theUser.country
          }`}</p>
          <p className="cardDescription">{theUser.youinasentence}</p>
          <div className="cardDivider" />
          <div className="cardTags">
            {theUser.tagsCategory
              .map((e, idx) => {
                return <p key={idx}>{e}</p>;
              })
              .slice(0, 6)}
          </div>
        </div>
      </div>
    );
  }
}

export default CardA;
