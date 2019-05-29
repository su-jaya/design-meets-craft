import React, { Component } from "react";
import Header from "../Header";
import NavBar from "../NavBar";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import TagsInput from "react-tagsinput";
import Row from "react-bootstrap/Row";

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

    let theUser = this.state.user;

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
          <Row>
            <Col xs={8}>
              <div>
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
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="profession"
                  value={theUser.tagsCategory}
                />
              </div>
              <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Your needs</h1>
                </div>
                <TagsInput
                  className="suggestedTags viewTagsOnly"
                  id="needs"
                  value={theUser.tagsMaterial}
                />
              </div>
              <div className="homeDivider" />

              {theUser.role === "designer" ? (
                <div>
                  <div>
                    <div className="profileEditHeadline">
                      <h1>Destination</h1>
                    </div>
                    <TagsInput
                      className="suggestedTags viewTagsOnly"
                      id="destination"
                      value={theUser.tagsDestination}
                    />
                  </div>

                  <div className="homeDivider" />

                  <div>
                    <div className="profileEditHeadline">
                      <h1>Production capacity</h1>
                    </div>
                    <p className="profileEditText">{theUser.capacity}</p>
                  </div>

                  <div className="homeDivider" />

                  <div>
                    <div className="profileEditHeadline">
                      <h1>Looking for</h1>
                    </div>
                    <p className="profileEditText">{theUser.lookingfor}</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* GALLERY SECTION  */}

              {/* <div className="homeDivider" />
              <div>
                <div className="profileEditHeadline">
                  <h1>Gallery</h1>
                  <button>
                    <img
                      className="profileEditIcon"
                      src="/images/DmC_penicon.png"
                      alt="pen icon"
                      width="15em"
                    />
                    Edit
                  </button>
                </div>
                {theUser.gallery.map((e, idx) => (
                  <img src={e} alt={idx} />
                ))}
              </div> */}
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default VisitProfile;
