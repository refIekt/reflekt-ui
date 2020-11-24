import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_meta.scss'

class Meta extends React.Component {

  constructor(props) {
    super(props);

    console.log(this.props);
  }

  render() {
    return (
      <div className="meta">
        <h4>{this.props.title}:</h4>
        <div className="meta-items">
          <div className="meta-item">
            <label>Type:</label> {this.props.meta["type"]}
          </div>
          {(this.props.meta["count"] != null ?
            <div className="meta-item">
              <label>Count:</label> {this.props.meta["count"]}
            </div>
          : null )}
        </div>
      </div>
    );
  }
}

export default hot(module)(Meta);
