import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_io.scss'

class IO extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="io">
        <h4>{this.props.title}:</h4>
        <div className="io-items">
          <div className="io-item">
            <label>Type:</label> {this.props.io["type"]}
          </div>
          {(this.props.io["count"] != null ?
            <div className="io-item">
              <label>Count:</label> {this.props.io["count"]}
            </div>
          : null )}
        </div>
      </div>
    );
  }
}

export default hot(module)(IO);
