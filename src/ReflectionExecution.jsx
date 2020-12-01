import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as Contexts from './Contexts';
import Reflection from "./Reflection"
import '../styles/_execution.scss'

class ReflectionExecution extends React.Component {

  static contextType = Contexts.WriteModeContext;

  constructor(props) {
    super(props);

    // Default state.
    this.state = {
      open: false,
      status: props.execution.status,
      hidden: false
    };

  }

  toggle = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  hide = (exe_id) => {
    this.setState({hidden: true});
  }

  render() {
    var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return (
      <div className={`execution ${this.state.status} ${(this.state.open ? 'open' : 'closed')} ${(this.state.hidden ? ' hidden' : ' visible')}`}>

        <div className="execution--summary" onClick={this.toggle}>

          <div className="timestamp">{new Intl.DateTimeFormat('default', options).format(this.props.execution.timestamp * 1000)}</div>
          <div className="status">{this.props.execution.status}</div>

        </div>

        <div className="execution--details">

          {/* List reflections in an accordion for this execution. */}
          {(this.state.open ? this.props.execution.reflections.map((reflection, index) =>
            <Reflection reflection={reflection} key={`reflection-${reflection.ref_id}`} />
          ) : null )}

        </div>

      </div>
    );
  }
}

export default hot(module)(ReflectionExecution);
