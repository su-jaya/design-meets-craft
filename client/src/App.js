import React from "react";
import "./App.css";
import Registration from "./components/signup/Registration";
import { Route, Switch } from "react-router-dom";
import AboutYou from "./components/signup/AboutYou";
import Needs from "./components/signup/Needs";
import Home from "./components/home/Home";
import AboutUs from "./components/about/AboutUs";
import AuthService from "./components/signup/auth-service";
import Login from "./components/signup/Login";

class App extends React.Component {
  state = {
    loggedInUser: null
  };

  service = new AuthService();

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  setTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/signup"
            render={props => (
              <Registration setUser={this.setTheUser} {...props} />
            )}
          />
          <Route
            path="/aboutyou"
            render={props => (
              <AboutYou userInSession={this.state.loggedInUser} {...props} />
            )}
          />
          <Route
            path="/needs"
            render={props => (
              <Needs userInSession={this.state.loggedInUser} {...props} />
            )}
          />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
