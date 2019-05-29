import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TagsInput from "react-tagsinput";
import { Link } from "react-router-dom";

class MyShowroom extends Component {
  render() {
    let theUser = this.props.theUser;
    return (
      <div>
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

              <div className="homeDivider" />
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
              </div>
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyShowroom;
