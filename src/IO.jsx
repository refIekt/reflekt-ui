import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
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
            <label>Type:</label> {this.props.io[C.TYPE]}
          </div>
          {(this.props.io[C.COUNT] != null ?
            <div className="io-item">
              <label>Count:</label> {this.props.io[C.COUNT]}
            </div>
          : null )}
          <div className="io-item">
            <label>Value:</label> <pre>{this.props.io[C.VALUE]}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(IO);
