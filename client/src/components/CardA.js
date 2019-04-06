import React, { Component } from "react";
import "./Card.css";
// import { Link } from "react-router-dom";

class CardA extends Component {
  render() {
    let theUser = this.props.theUser;
    if (!theUser) {
      return "Loading...";
    }

    return (
      <div className="cardContainer mx-auto">
        {/* <Link to={`/userprofile/${theUser._id}`}> */}
        <div className="cardBanner">
          <img
            src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_fill,h_175,w_306/v1/${
              theUser.public_id_ti
            }.jpg`}
            alt="public profile"
          />
        </div>
        <img
          className="cardAvatar"
          src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_150,w_150,g_face/v1/${
            theUser.public_id_bl
          }.jpg`}
          alt="public profile"
        />
        <div className="cardText">
          <h3 className={this.props.class}> {theUser.brand}</h3>
          <p className="cardSubtitle">{`${theUser.city}, ${
            theUser.country
          }`}</p>
          <p className="cardDescription">{theUser.youinasentence}</p>
          <div className="cardDivider" />
          <div className="cardTags">
            {[
              ...theUser.tagsCategory.slice(0, 4),
              ...theUser.tagsMaterial.slice(0, 4)
            ].map((e, idx) => {
              return <p key={idx}>{e}</p>;
            })}
          </div>
        </div>
        {/* </Link> */}
      </div>
    );
  }
}

export default CardA;
