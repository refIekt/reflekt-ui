import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as Contexts from './Contexts';

import Meta from './Meta';
import '../styles/_reflection.scss'
import '../styles/_io.scss'

class Reflection extends React.Component {

  static contextType = Contexts.WriteModeContext;

  ////
  // STATE.
  ////

  constructor(props) {
    super(props);

    this.state = {
      status: props.reflection["status"],
      hidden: false
    }
  }

  hide = (ref_id) => {
    this.setState({hidden: true});
  }

  render() {
    return (
      <div className={"reflection " + this.state.status + (this.state.hidden ? ' hidden' : ' visible')}>

        <div className="reflection__summary">

          <span className="title">{this.props.reflection["class"]}</span>
          <span className="method">{this.props.reflection["method"]}()</span>

        </div>

        <div className="reflection__details">

          <div className="io" id="inputs">
            <h4>Input</h4>
            {this.props.reflection["inputs"] != null ?
              this.props.reflection["inputs"].map((meta, index) =>
                <Meta meta={meta} key={`meta-${index}`} />
              )
            :
              <strong className="meta-none">none</strong>
            }
          </div>

          <div className="io" id="output">
            <h4>Output</h4>
            {this.props.reflection["output"] != null ?
              <Meta meta={this.props.reflection["output"]} />
            :
              <strong className="meta-none">none</strong>
            }
          </div>

        </div>

      </div>
    );
  }
}

export default hot(module)(Reflection);
