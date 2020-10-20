import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
import * as Contexts from './Contexts';
import IO from './IO';
import '../styles/_reflection.scss'
import '../styles/_actions.scss'

class Reflection extends React.Component {

  static contextType = Contexts.WriteModeContext;

  constructor(props) {
    super(props);

    this.state = {
      status: (props.reflection[C.STATUS] == C.PASS ? "pass" : "fail"),
      hidden: false
    }
  }

  keep = (id, event) => {
    console.log(id);
    console.log(event);
    console.log(d);
  }

  delete = (ref_id, event) => {

    // Build request.
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ref_id: ref_id })
    };

    // Send request.
    fetch('/reflections/delete', requestOptions)
    //  .then(response => response.json())
    //  .then(data => this.setState({ postId: data.id }));

    // Update UI.
    this.hide(ref_id);
  }

  hide = (ref_id) => {
    this.setState({hidden: true});
  }

  render() {
    return (
      <div className={"reflection " + this.state.status + (this.state.hidden ? ' hidden' : ' visible')}>

        <div className="reflection--summary">

          <span className="title">{this.props.reflection[C.CLASS]}</span>
          <span className="method">{this.props.reflection[C.METHOD]}()</span>

          {( this.props.reflection[C.BASE_ID] != null ?
            <div className="actions">

              <button
                className={"keep " + (this.context ? "enabled" : "disabled")}
                onClick={(event) => this.keep(this.props.reflection[C.REF_ID], event)}
              >Keep
              </button>

              <button
                className={"delete " + (this.context ? "enabled" : "disabled")}
                onClick={(event) => this.delete(this.props.reflection[C.REF_ID], event)}
              >Delete</button>

            </div>
          : null )}

        </div>

        <div className="reflection--details">

          <div className="ios">
            {this.props.reflection[C.INPUT].map((input, index) => {
              <IO io={input} title="Input" key={index}/>
            })}
          </div>

          <div className="ios">
            <IO io={this.props.reflection[C.OUTPUT]} title="Output" />
          </div>

        </div>

      </div>
    );
  }
}

export default hot(module)(Reflection);
