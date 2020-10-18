import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Reflection from "./Reflection"
import '../styles/_execution.scss'

class Execution extends React.Component {

  constructor(props) {
    super(props);

    this.state = {open: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      open: !state.open
    }));
  };

  render() {
    var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return (
      <div className={"execution " + (this.state.open ? 'open' : 'closed')} onClick={this.toggle}>

        <div className="summary">
          <div className="timestamp">{new Intl.DateTimeFormat('default', options).format(this.props.execution.timestamp * 1000)}</div>
        </div>

        <div className="details">
          {(this.state.open ? this.props.execution.reflections.map((reflection, index) =>
            <Reflection reflection={reflection} key={reflection.r} />
          ) : null )}
        </div>

      </div>
    );
  }
}

export default hot(module)(Execution);
