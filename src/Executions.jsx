import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
import Execution from "./Execution"

class Executions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.process(props.reflections);
  }

  // Wrap Reflections inside Executions.
  process(reflections) {

    // Build executions.
    var executions = {};
    reflections.forEach((reflection) => {

      // When base reflection.
      if (reflection.b == null) {
        // Build execution from base reflection ID and number.
        var key = `${reflection.e}-${reflection.n}`
        executions[key] = {
          timestamp: reflection.t,
          reflections: [reflection],
          status: 'pass'
        }
      }
      // When child reflection.
      else {
        var key = `${reflection.b}-${reflection.n}`
        executions[key]['reflections'].push(reflection)
      }

      if (reflection[C.STATUS] == C.FAIL) {
        executions[key]['status'] = 'fail';
      }
    });

    var unsorted_executions = [];
    Object.values(executions).forEach((execution) => {
      unsorted_executions.push(execution);
    });

    // Save sorted executions.
    var sorted_executions = unsorted_executions.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);
    this.state.executions = sorted_executions;

    console.log(sorted_executions);

  }

  render() {
    return (
      <div id="executions">
        {this.state.executions.map((execution, index) =>
          <Execution execution={execution} key={execution.r} />
        )}
      </div>
    );
  }
}

export default hot(module)(Executions);
