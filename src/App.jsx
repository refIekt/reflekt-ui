// Libraries.
import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
// Components.
import Header from "./Header"
import Executions from "./Executions"
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
    this.state.db = {}
    this.state.writeMode = false

    // Activate write mode.
    if (window.location.protocol != "file:") {
      this.state.writeMode = true;
    }

  }

  ////
  // EVENTS.
  ////

  componentDidMount() {

    ////
    // DATA.
    ////

    window.addEventListener('load', (event) => {

      // Get data.
      this.setState({db: JSON.parse(db)});
      console.log("DATA:");
      console.log(this.state.db);

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
            <Executions reflections={this.state.db.reflections} />
          </main>
        </div>

      </>
    )
  }
}

export default hot(module)(App);
