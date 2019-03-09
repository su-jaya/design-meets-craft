import React, { Component } from "react";
import axios from "axios";
import Header from "../Header";
import "../../Registration.css";
import Footer from "../Footer";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  // Change Handler Form

  changeHandler = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  // On Submit

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/signup/designer", this.state)
      .then(() => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordConfirm: ""
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />

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

        <div className="registrationContainerAndNote">
          <div className="registrationContainer">
            {/*What's Your Profession */}
            <h2 className="registrationHeadline">What's your profession</h2>
            <p className="subtitle">
              First, please tell us what your profession is
            </p>

            {/*Whats your profession */}
            <div className="registrationProfession">
              <div className="registrationProfessionBox designer">
                <h3 className="registrationProfessionHeadline">Designer</h3>
                <p className="registrationSmallText">
                  Fashion ipsum dolor sit amet, consetetur
                </p>
              </div>
              <p className="registrationOr">or</p>
              <div className="registrationProfessionBox artisan">
                <h3 className="registrationProfessionHeadline">Artisan</h3>
                <p className="registrationSmallText">
                  Fashion ipsum dolor sit amet, consetetur
                </p>
              </div>
            </div>

            {/*Create your account*/}
            <h2 className="registrationHeadline">Create your account</h2>
            <p className="subtitle">
              After the first step you get an email with your access data
            </p>

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
                required
                onChange={e => this.changeHandler(e)}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={this.state.password}
                minLength="8"
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

              <p>
                By clicking Sign Up, you agree to our Terms and that you have
                read our Privacy Policy, including our Cookie Policy
              </p>

              <button>Sign Up</button>
            </form>
          </div>
          <div className="registrationNote">
            <h3>Note</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Registration;
