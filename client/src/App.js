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
import Profile from "./components/profile/Profile";
import Artisans from "./components/designers-artisans/Artisans";
import Designers from "./components/designers-artisans/Designers";
import Uploads from "./components/signup/Uploads";

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
          <Route
            exact
            path="/"
            render={props => (
              <Home userInSession={this.state.loggedInUser} {...props} />
            )}
          />
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
          <Route
            path="/aboutus"
            render={props => (
              <AboutUs userInSession={this.state.loggedInUser} {...props} />
            )}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/upload"
            render={props => <Uploads setUser={this.setTheUser} {...props} />}
          />

          {/* path to be changed into /profile/designer/:id */}
          <Route
            path="/profile"
            render={props => (
              <Profile userInSession={this.state.loggedInUser} {...props} />
            )}
          />

          <Route
            path="/designers"
            render={props => (
              <Designers userInSession={this.state.loggedInUser} {...props} />
            )}
          />

          <Route
            path="/artisans"
            render={props => (
              <Artisans userInSession={this.state.loggedInUser} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
