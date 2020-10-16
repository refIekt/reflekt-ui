import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Reflection from "./Reflection"
import '../styles/_execution.scss'

class Execution extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="execution">
        <div class="timestamp">{this.props.execution.timestamp}</div>
        {this.props.execution.reflections.map((reflection, index) =>
          <Reflection reflection={reflection} key={reflection.r} />
        )}
      </div>
    );
  }
}

export default hot(module)(Execution);
