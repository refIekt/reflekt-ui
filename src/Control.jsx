import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as Contexts from './Contexts';

import Meta from './Meta';
import '../styles/_reflection.scss'
import '../styles/_actions.scss'
import '../styles/_io.scss'

class Control extends React.Component {

  static contextType = Contexts.WriteModeContext;

  ////
  // STATE.
  ////

  constructor(props) {
    super(props);

    this.state = {
      hidden: false
    }
  }

  hide = (rid) => {
    this.setState({hidden: true});
  }

  ////
  // ACTIONS.
  ////

  delete = (rid, event) => {

    // Build request.
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rid: rid })
    };

    // Send request.
    fetch('/control/delete', requestOptions)
      // Update UI.
      .then(response => this.hide(rid))
  }

  render() {
    return (
      <div className={"reflection neutral" + (this.state.hidden ? ' hidden' : ' visible')}>

        <div className="reflection__summary">

          <span className="title">{this.props.control["class"]}</span>
          <span className="method">{this.props.control["method"]}()</span>

          {( this.props.control["eid"] != null ?
            <div className="actions">

              <button
                className={"delete " + (this.context ? "enabled" : "disabled")}
                onClick={(event) => this.delete(this.props.control["rid"], event)}
              >Delete</button>

            </div>
          : null )}

        </div>

        <div className="reflection__details">

          <div className="io" id="inputs">
            <h4>Input</h4>
            {this.props.control["inputs"] != null ?
              this.props.control["inputs"].map((meta, index) =>
                <Meta meta={meta} key={`meta-${index}`} />
              )
            :
              <strong className="meta-none">none</strong>
            }
          </div>

          <div className="io" id="output">
            <h4>Output</h4>
            {this.props.control["output"] != null ?
              <Meta meta={this.props.control["output"]} />
            :
              <strong className="meta-none">none</strong>
            }
          </div>

        </div>

      </div>
    );
  }
}

export default hot(module)(Control);
