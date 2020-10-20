import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as C from './Constants';
import Execution from "./Execution"

class Executions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.create_executions(props.reflections);
  }

  create_executions(reflections) {

    // Group reflections into executions.
    var executions = {};
    reflections.forEach((reflection) => {

      // When base reflection.
      if (reflection.b == null) {
        // Create execution from base reflection.
        var key = `${reflection.e}-${reflection.n}`
        executions[key] = {
          id: reflection.e,
          status: 'pass',
          timestamp: reflection.t,
          reflections: [reflection],
        }
      }
      // When child reflection.
      else {
        // Add reflection to execution.
        var key = `${reflection.b}-${reflection.n}`
        executions[key]['reflections'].push(reflection)
      }

      // Flag execution as failed when a reflection fails.
      if (reflection[C.STATUS] == C.FAIL) {
        executions[key]['status'] = 'fail';
      }
    });

    // Convert executions to array in order to sort.
    var unsorted_executions = [];
    Object.values(executions).forEach((execution) => {
      unsorted_executions.push(execution);
    });

    // Sort executions.
    var sorted_executions = unsorted_executions.sort((a, b) => a.timestamp > b.timestamp ? 1 : -1);

    // Save executions.
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
