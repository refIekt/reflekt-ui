import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as Contexts from './Contexts';
import Control from "./Control"
import '../styles/_execution.scss'
import '../styles/_actions.scss'

class ControlExecution extends React.Component {

  static contextType = Contexts.WriteModeContext;

  constructor(props) {
    super(props);

    // Default state.
    this.state = {
      open: false,
      hidden: false
    };

  }

  toggle = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  delete_controls = (exe_id, event) => {

    // Prevent toggle.
    event.stopPropagation();

    // Build request.
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ exe_id: exe_id })
    };

    // Send request.
    fetch('/controls/delete', requestOptions)
      // Update UI.
      .then(response => this.hide(exe_id))

  }

  hide = (exe_id) => {
    this.setState({hidden: true});
  }

  render() {
    var options = {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    return (
      <div className={`execution neutral ${(this.state.open ? 'open' : 'closed')} ${(this.state.hidden ? ' hidden' : ' visible')}`}>

        <div className="execution--summary" onClick={this.toggle}>

          <div className="timestamp">
            {new Intl.DateTimeFormat('default', options).format(this.props.execution.timestamp * 1000)}
          </div>

          <div className="control-label">Control</div>

          <div className="actions">
            <button
              className={"delete " + (this.context ? "enabled" : "disabled")}
              onClick={(event) => this.delete_controls(this.props.execution.id, event)}
            >Delete</button>
          </div>

        </div>

        <div className="execution--details">

          {/* List controls in an accordion for this execution. */}
          {(this.state.open ? this.props.execution.controls.map((control, index) =>
            <Control control={control} key={`control-${control.ref_id}`} />
          ) : null )}

        </div>

      </div>
    );
  }
}

export default hot(module)(ControlExecution);
