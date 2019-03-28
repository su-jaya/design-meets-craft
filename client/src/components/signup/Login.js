import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import Header from "../Header";
import Navbar from "../NavBar";
import Footer from "../Footer";
import "./Login.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.service
      .login(email, password)
      .then(response => {
        this.setState({ email: "", password: "" });
        this.props.getUser(response);
        console.log(response.message);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <Container className="login">
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <form className="loginForm" onSubmit={this.handleFormSubmit}>
                <label>Email:</label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={e => this.handleChange(e)}
                />
                <label>Password:</label>
                <textarea
                  name="password"
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />

                <input className="loginButton" type="submit" value="Login" />
              </form>
              <p>
                Don't have an account yet?<span> </span>
                <Link to={"/signup"} className="loginSignupButton">
                  Signup
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Login;
