import React, { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

class VisitProfile extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/getuserprofile/${this.props.match.params.userId}`,
      withCredentials: true
    })
      .then(user =>
        this.setState({
          user: user.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.user) {
      return "Loading...";
    }

    return (
      <div>
        <Header loggedIn={this.props.userInSession} />
        <NavBar />

        {/* Banner */}
        <div className="profileBanner">
          <img
            src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_400,w_1440,c_fill/v1/${
              this.state.user.public_id_ti
            }.jpg`}
            alt="public profile"
          />
        </div>

        {/* Profile Box */}
        <div className="profileBoxPosition">
          <ProfileCard {...this.state.user} />
        </div>

        {/* Your Profession */}
        <Container fluid={true} className="profileEditContainer">
          <div className="profileEditHeadline">
            <h1>Your profession</h1>
            <Link to="/editprofile">
              <button>
                <img
                  className="profileEditIcon"
                  src="/images/DmC_penicon.png"
                  alt="pen icon"
                  width="15em"
                />
                Edit
              </button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}

export default VisitProfile;
