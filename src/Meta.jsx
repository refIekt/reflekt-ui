import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_meta.scss'

class Meta extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="meta">
        {(this.props.meta != null ?
          <ul className="meta__attributes">
            {Object.entries(this.props.meta).map(([key, value]) =>
              <li className="meta-attribute" key={`meta-attribute-${key}`}>
                <label>{key}:</label>
                <span className="value">{this.props.meta[key]}</span>
              </li>
            )}
          </ul>
        :
          <strong className="meta-none">none</strong>
        )}
      </div>
    );
  }
}

export default hot(module)(Meta);
