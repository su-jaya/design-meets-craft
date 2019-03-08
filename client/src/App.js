import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Home from "./components/home/Home";

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:5000/test").then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
