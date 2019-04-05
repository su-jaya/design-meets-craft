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
import EditProfile from "./components/profile/EditProfile";
import UserProfile from "./components/profile/UserProfile";

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
            render={() => (
              <Home
                setUser={this.setTheUser}
                userInSession={this.state.loggedInUser}
              />
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
            render={() => <AboutYou userInSession={this.state.loggedInUser} />}
          />

          {/* <Route
            path="/userprofile/:userId"
            render={props => (
              <UserProfile
                setUser={this.setTheUser}
                userInSession={this.state.loggedInUser}
                {...props}
              />
            )}
          /> */}

          <Route
            path="/needs"
            render={() => (
              <Needs
                setUser={userobj => this.setTheUser(userobj)}
                userInSession={this.state.loggedInUser}
              />
            )}
          />

          <Route
            path="/aboutus"
            render={() => (
              <AboutUs
                setUser={this.setTheUser}
                userInSession={this.state.loggedInUser}
              />
            )}
          />
          <Route
            path="/upload"
            render={() => (
              <Uploads
                setUser={userobj => this.setTheUser(userobj)}
                userInSession={this.state.loggedInUser}
              />
            )}
          />

          <Route
            path="/login"
            render={() => <Login setUser={this.setTheUser} />}
          />
          <Route
            path="/editprofile"
            render={() => (
              <EditProfile
                setUser={this.setTheUser}
                userInSession={this.state.loggedInUser}
              />
            )}
          />

          <Route
            path="/profile"
            render={() => {
              // this is just so we wait for LOGGED IN users until the user object was returned from the BE
              // this is not to redirect loggedout users (bc then it will not work for logged in users anymore)
              if (!this.state.loggedInUser) {
                return <h1>Loading...</h1>;
              }
              return (
                <Profile
                  userInSession={this.state.loggedInUser}
                  setUser={this.setTheUser}
                />
              );
            }}
          />

          <Route
            path="/designers"
            render={() => (
              <Designers
                userInSession={this.state.loggedInUser}
                setUser={this.setTheUser}
              />
            )}
          />

          <Route
            path="/artisans"
            render={() => (
              <Artisans
                setUser={this.setTheUser}
                userInSession={this.state.loggedInUser}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
