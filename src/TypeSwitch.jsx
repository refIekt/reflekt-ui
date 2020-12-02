import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_type-switch.scss'

class TypeSwitch extends React.Component {

  constructor(props) {
    super(props);
  }

  activate = (type, event) => {
    // Call switchType() in App component which is passed down via props.
    // When called it sets state which cascades down to this.props.types.
    this.props.switchType(type)
  }

  render() {
    return (
      <div className="type-switch">
        {Object.entries(this.props.types).map(([type, values]) =>
          <button
            key={`switch-type-${type}`}
            onClick={(event) => this.activate(type, event)}
            className={values.active ? 'active' : null}
          >{values.title}</button>
        )}
      </div>
    );
  }
}

export default hot(module)(TypeSwitch);
