import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="cardContainer mx-auto">
        <div className="cardBanner">
          <img
            src="./images/banner_test.png"
            alt="designer banner"
            width="306px"
            height="175px"
          />
        </div>
        <img
          className="cardAvatar"
          src="./images/avatar_test.jpg"
          alt="card avatar"
        />
        <div className="cardText">
          <h3 className="cardHeadline">Francesca Imoli</h3>
          <p className="cardSubtitle">Designer</p>
          <p className="cardDescription">
            "An English Canadian with strong French, Latin, & Aboriginal
            influences who's a terror at craft shows because she thinks
            everybody knows something worth listening to."
          </p>
          <div className="cardDivider" />
          <div className="cardTags">
            <p>Accessories</p>
            <p>Interior</p>
            <p>Leather</p>
            <p>Bags</p>
            <p>Tools</p>
            <p>Embroidery</p>
            <p>...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
