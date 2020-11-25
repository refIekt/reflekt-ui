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
          <ul className="meta-attributes">
            {Object.entries(this.props.meta).map((key) =>
              <li className="meta-attribute">
                <span className="label">{key}</span>
                <span className="value">{this.props.meta[key]}</span>
              </li>
            )}
          </ul>
        :
          <strong className="empty">Empty</strong>
        )}
      </div>
    );
  }
}

export default hot(module)(Meta);
