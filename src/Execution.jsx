import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
import * as Contexts from './Contexts';
import Reflection from "./Reflection"
import '../styles/_execution.scss'
import '../styles/_actions.scss'

class Execution extends React.Component {

  static contextType = Contexts.WriteModeContext;

  constructor(props) {
    super(props);
    // Default state.
    this.state = {open: false};
    // Ensure toggle() has correct this.
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(state => ({
      open: !state.open
    }));
  };

  keep = (exe_id, event) => {

    event.stopPropagation();

  }

  delete = (exe_id, event) => {

    event.stopPropagation();

    // Build request.
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ exe_id: exe_id })
    };

    // Send request.
    fetch('/executions/delete', requestOptions)
    //  .then(response => response.json())
    //  .then(data => this.setState({ postId: data.id }));

    // Update UI.
    this.hide(exe_id);
  }

  hide = (exe_id) => {
    this.setState({hidden: true});
  }

  render() {
    var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return (
      <div className={"execution " + this.props.execution.status + " " + (this.state.open ? 'open' : 'closed')}>

        <div className="execution--summary" onClick={this.toggle}>

          <div className="timestamp">{new Intl.DateTimeFormat('default', options).format(this.props.execution.timestamp * 1000)}</div>
          <div className="status">{this.props.execution.status}</div>

          <div className="actions">

            <button
              className={"keep " + (this.context ? "enabled" : "disabled")}
              onClick={(event) => this.keep(this.props.execution.id, event)}
            >Keep
            </button>

            <button
              className={"delete " + (this.context ? "enabled" : "disabled")}
              onClick={(event) => this.delete(this.props.execution.id, event)}
            >Delete</button>

          </div>

        </div>

        <div className="execution--details">

          {(this.state.open ? this.props.execution.reflections.map((reflection, index) =>
            <Reflection reflection={reflection} key={reflection.r} />
          ) : null )}

        </div>

      </div>
    );
  }
}

export default hot(module)(Execution);
