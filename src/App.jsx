import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import Header from "./Header"
import Execution from "./Execution"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {}

    window.writeMode = false

    window.addEventListener('load', (event) => {

      // Activate write mode.
      if (window.location.protocol != "file:") {
        window.writeMode = true
      }
      this.state.writeMode = window.writeMode;

      // Get data.
      this.state.db = JSON.parse(db);

      // Build data.
      this.buildExecutions()

    });
  }

  componentDidMount() {

  }

  buildExecutions() {

    this.state.db.reflections.forEach((reflection) => {
      //console.log(reflection)
    });

  }

  ////
  // UI.
  ////

  render() {

    return (
      <>
        <Header writeMode={this.state.writeMode} />
        <strong>Hello</strong>
      </>
    )
  }
}

export default hot(module)(App);
