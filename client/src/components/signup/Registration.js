import React, { Component } from "react";
import Header from "../Header";
import "./Registration.css";
import Footer from "../Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import Note from "./Note";
import queryString from "query-string";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    message: ""
  };

  service = new AuthService();

  // Change Handler Form
  submitHandler = event => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const password = this.state.password;
    const passwordConfirm = this.state.passwordConfirm;
    const role = Object.values(
      queryString.parse(this.props.location.search)
    )[0];

    if (role === undefined) {
      this.setState({ message: "please select a profession" });
      return;
    }

    this.service
      .signup(firstName, lastName, email, password, passwordConfirm, role)
      .then(response => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: "",
          message: response.message
        });
        this.props.setUser(response.user);
      })
      .catch(error => {
        this.setState({
          message: error.response.data.message
        });
      });
  };

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Header url={this.props.match.url} />

        {/*Process Bar */}
        <div>
          <h1 className="registrationHeading">1/4: Registration</h1>
          <div className="registrationBarContainer">
            <div className="registrationBarComponent registrationBarActive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive registrationBarMiddle" />
            <div className="registrationBarComponent registrationBarInactive" />
          </div>
        </div>

        <Container className="registrationContainerAndNote">
          <Row>
            <Col xs lg="7" className="registrationContainer">
              {/*What's Your Profession */}
              <h2 className="registrationHeadline">What's your profession</h2>
              <p className="registrationSubtitle">
                First, please tell us what your profession is
              </p>

              {/*Profession Boxes*/}
              <Container className="registrationProfession">
                <Link
                  to="/signup?role=designer"
                  style={{ textDecoration: "none" }}
                >
                  <Col
                    md={6}
                    style={
                      Object.values(
                        queryString.parse(this.props.location.search)
                      )[0] === "designer"
                        ? { backgroundColor: "#d4b5aa" }
                        : { backgroundColor: "white" }
                    }
                    className="registrationProfessionBox designer"
                  >
                    <h3 className="registrationProfessionHeadline">Designer</h3>
                    <p className="registrationSmallText">
                      Fashion ipsum dolor sit amet, consetetur
                    </p>
                  </Col>
                </Link>
                ´{" "}
                <Col className="registrationOr">
                  <p>or</p>
                </Col>
                <Link
                  to="/signup?role=artisan"
                  style={{ textDecoration: "none" }}
                >
                  <Col
                    md={6}
                    style={
                      Object.values(
                        queryString.parse(this.props.location.search)
                      )[0] === "artisan"
                        ? { backgroundColor: "#edeeca" }
                        : { backgroundColor: "white" }
                    }
                    className="registrationProfessionBox artisan"
                  >
                    <h3 className="registrationProfessionHeadline">Artisan</h3>
                    <p className="registrationSmallText">
                      Fashion ipsum dolor sit amet, consetetur
                    </p>
                  </Col>
                </Link>
              </Container>

              {/*Create your account*/}
              <h2 className="registrationHeadline">Create your account</h2>
              <p className="registrationSubtitle">
                After the first step you get an email with your access data
              </p>

              {this.state.message === "no Error" ? (
                <Redirect push to="/aboutyou" />
              ) : (
                this.state.message
              )}

              <form
                className="registrationForm"
                onSubmit={event => this.submitHandler(event)}
              >
                <div className="registrationFormName">
                  <div className="registrationFormNameComponent">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={this.state.firstName}
                      required
                      onChange={e => this.changeHandler(e)}
                    />
                  </div>

                  <div className="registrationFormNameComponent">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={this.state.lastName}
                      required
                      onChange={e => this.changeHandler(e)}
                    />
                  </div>
                </div>

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={this.state.email}
                  // required
                  onChange={e => this.changeHandler(e)}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={this.state.password}
                  // minLength="8"
                  required
                  onChange={e => this.changeHandler(e)}
                />

                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  value={this.state.passwordConfirm}
                  required
                  onChange={e => this.changeHandler(e)}
                />

                <p className="registrationSignUpText">
                  By clicking Sign Up, you agree to our Terms and that you have
                  read our Privacy Policy, including our Cookie Policy.
                </p>

                <button className="registrationSignUpButton">Sign Up</button>
              </form>
            </Col>
            <Col xs lg="3">
              <Note />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Registration;
