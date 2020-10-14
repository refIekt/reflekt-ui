import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";

class App extends Component {

  constructor(props) {
    super(props);

    window.writeMode = false

    window.addEventListener('load', (event) => {

      // Activate write mode.
      if (window.location.protocol != "file:") {
        window.writeMode = true
      }

      console.log(data);
      console.log(window.readWrite);

    });
  }

  componentDidMount() {

    //console.log(document.getElementById("db"));

  }

  ////
  // UI.
  ////

  render() {

    return (
      <strong>Hello</strong>
    )
  }
}

export default hot(module)(App);
