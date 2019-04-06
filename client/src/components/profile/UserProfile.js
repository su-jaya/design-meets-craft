import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import NavBar from "../NavBar";
import ProfileCard from "./ProfileCard";
import TagsInput from "react-tagsinput";
// import _ from "lodash";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Footer from "../Footer";

class UserProfile extends Component {
  state = {
    theUser: null
  };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/getuserprofile/${this.props.match.params.userId}`,
      withCredentials: true
    })
      .then(user => {
        this.setState({
          theUser: user.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.theUser === null) {
      return "Loading...";
    }

    return (
      <div>
        <Header
          url={this.props.match.url}
          loggedIn={this.props.userInSession}
          setUser={this.props.setUser}
        />
        <NavBar />

        {/* Banner */}
        <div className="profileBanner">
          <img
            src={`https://res.cloudinary.com/dfksfwvex/image/upload/c_thumb,h_400,w_1500,c_scale/v1/${
              this.state.theUser.public_id_ti
            }.jpg`}
            alt="public profile"
          />
        </div>

        {/* Profile Box */}
        <div className="profileBoxPosition">
          <ProfileCard {...this.state.theUser} />
        </div>

        <div className="homeDivider" />

        {/* Profile Edits */}
        <Container fluid={true} className="profileEditContainer">
          <Row>
            <Col xs={8}>
              <div>
                <div className="profileEditHeadline">
                  <h1>profession</h1>
                </div>
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="profession"
                  value={this.state.theUser.tagsCategory}
                />
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Needs</h1>
                </div>
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="needs"
                  value={this.state.theUser.tagsMaterial}
                />
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Destination</h1>
                </div>
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="destination"
                  value={this.state.theUser.tagsDestination}
                />
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Production capacity</h1>
                </div>
                <p className="profileEditText">{this.state.theUser.capacity}</p>
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Looking for</h1>
                </div>
                <p className="profileEditText">
                  {this.state.theUser.lookingfor}
                </p>
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default UserProfile;
