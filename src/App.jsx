// Libraries.
import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
// Components.
import Header from "./Header"
import Execution from "./Execution"
// Styles.
import '../styles/_base.scss'

class App extends Component {

  constructor(props) {
    super(props);

    ////
    // STATE.
    ////

    this.state = {}
    this.state.writeMode = false

    // Activate write mode.
    if (window.location.protocol != "file:") {
      this.state.writeMode = true;
    }

    ////
    // EVENT HANDLERS.
    ////

    window.addEventListener('load', (event) => {

      // Get data.
      this.state.db = JSON.parse(db);

      // Build data.
      this.buildExecutions()

    });
  }

  ////
  // EVENTS.
  ////

  componentDidMount() {

  }

  ////
  // PROCESSORS.
  ////

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

        <div className="container">
          <main id="content">
            <strong>Hello</strong>
          </main>
        </div>

      </>
    )
  }
}

export default hot(module)(App);
