import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_alerts.scss'

class Alerts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div id="alerts">
        {this.props.alerts.map((alert, index) =>
          <div className={`alert ${alert.type}`} key={`alert-${index}`}>
            {alert.message}
          </div>
        )}
      </div>
    )

  }
}

export default hot(module)(Alerts)
