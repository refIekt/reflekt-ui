// Libraries.
import React, { Component } from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
// Components.
import * as Contexts from './Contexts';
import Alerts from "./Alerts"
import Header from "./Header"
import ReflectionExecutions from "./ReflectionExecutions"
import ControlExecutions from "./ControlExecutions"
// Styles.
import '../styles/_variables.scss'
import '../styles/_base.scss'

class App extends Component {

  constructor(props) {
    super(props);

    ////
    // STATE.
    ////

    this.state = {}
    this.state.db = {}
    this.state.alerts = []
    this.state.results = []
    this.state.writeMode = false

    // TypeSwitch.
    this.state.types = {
      reflection: {title: "Reflections", active: true},
      control: {title: "Controls", active: false}
    }

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

      // Get database.
      try {
        // "db" is a global variable provided by db.js which index.html loads.
        this.setState({db: JSON.parse(db)});
        console.log("DATA:");
        console.log(this.state.db);
      }
      catch (error) {
        this.addAlert("error", "Couldn't load database.")
      }

      // Process executions.
      if (db != undefined) {
        this.setState({results: <ReflectionExecutions reflections={this.state.db.reflections} />});
      }

    });

  }

  addAlert = (type, message) => {
    // Build alert.
    var alert = {
      type: type,
      message: message
    }
    // Add alert.
    var alerts = this.state.alerts
    alerts.push(alert)
    this.setState({alerts: alerts})
  }

  switchType = (new_type) => {

    // Build new types.
    var newTypes = {}

    Object.entries(this.state.types).forEach(function([type, values], index) {

      // Activate new type.
      if (type === new_type) {
        values['active'] = true
      }
      // Deactivate old type.
      else {
        values['active'] = false
      }

      newTypes[type] = values
    })

    // Set new types.
    this.setState({types: newTypes});

    // Set results.
    if (new_type == 'reflection') {
      this.setState({results: <ReflectionExecutions reflections={this.state.db.reflections} />});
    }
    else if (new_type == 'control') {
      this.setState({results: <ControlExecutions controls={this.state.db.controls} />});
    }
  }

  ////
  // UI.
  ////

  render() {

    return (
      <>
        <Contexts.WriteModeContext.Provider value={this.state.writeMode}>

          <Header types={this.state.types} switchType={this.switchType} />

          <div className="container">

            {this.state.alerts.length != 0 ?
              <Alerts alerts={this.state.alerts} />
            : null }

            <main id="content">
              {this.state.results}
            </main>

          </div>
        </Contexts.WriteModeContext.Provider>
      </>
    )
  }
}

export default hot(module)(App);
