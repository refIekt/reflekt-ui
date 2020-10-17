import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
import IO from './IO';
import '../styles/_reflection.scss'

class Reflection extends React.Component {

  constructor(props) {
    super(props);

    console.log(props.reflection);

    this.state = {};
    this.state.status = (props.reflection[C.STATUS] == C.PASS ? "pass" : "fail");
  }

  delete(id, e) {

  }

  render() {
    return (
      <div className={`reflection ${this.state.status}`}>

        <div className="summary">

          <span className="title">{this.props.reflection[C.CLASS]}</span>
          <span className="method">{this.props.reflection[C.METHOD]}()</span>

          <div className="actions">
            <button onClick={(event) => this.keep(id, event)}>Keep</button>
            <button onClick={(event) => this.delete(id, event)}>Delete</button>
          </div>

        </div>

        <div className="details">
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
