import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardD from "../CardD";
import CardA from "../CardA";
import axios from "axios";

import { Link } from "react-router-dom";
import _ from "lodash";
import TagsInput from "react-tagsinput";

class MyMatches extends Component {
  state = {
    top4matches: []
  };

  componentDidMount() {
    axios({
      method: "GET",
      url:
        (process.env.REACT_APP_API_URL || "http://localhost:5000") +
        `/match/${this.props.theUser.role}/4`,
      withCredentials: true
    })
      .then(top =>
        this.setState({
          top4matches: top.data
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    if (!this.props.theUser) {
      return "Loading...";
    }

    let theUser = this.props.theUser;

    return (
      <div>
        <div className="profileMatchesHeadline">
          <h1>Matches by your needs</h1>

          {theUser.role === "designer" ? (
            <Link to="/artisans">
              <button className="profileMatchesButton">SEE ALL</button>
            </Link>
          ) : (
            <Link to="/designers">
              <button className="profileMatchesButton">SEE ALL</button>
            </Link>
          )}
        </div>

        <div>
          <TagsInput
            className="suggestedTags viewTagsOnly"
            id="profession"
            value={_.sampleSize(
              [...theUser.tagsCategory, ...theUser.tagsMaterial],
              15
            )}
          />
        </div>

        <Container className="homeDesignersContainer" fluid={true}>
          <Row className="homeDesignersRow">
            {theUser.role === "designer"
              ? this.state.top4matches.map((e, idx) => {
                  return (
                    <Col key={idx} className="homeDesignersColumn mx-auto">
                      <CardA
                        key={idx}
                        theUser={e}
                        class="cardHeadlineArtisan"
                      />
                    </Col>
                  );
                })
              : this.state.top4matches.map((e, idx) => {
                  return (
                    <Col key={idx} className="homeDesignersColumn mx-auto">
                      <CardD
                        key={idx}
                        theUser={e}
                        class="cardHeadlineArtisan"
                      />
                    </Col>
                  );
                })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyMatches;
