import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Reflection from "./Reflection"
import '../styles/_execution.scss'

class Execution extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return (
      <div class="execution">
        <div class="timestamp">{new Intl.DateTimeFormat('default', options).format(this.props.execution.timestamp * 1000)}</div>
        {this.props.execution.reflections.map((reflection, index) =>
          <Reflection reflection={reflection} key={reflection.r} />
        )}
      </div>
    );
  }
}

export default hot(module)(Execution);
