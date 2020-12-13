import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ControlExecution from "./ControlExecution"

class ControlExecutions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

    this.create_executions(props.controls);
  }

  create_executions(controls) {

    // Group controls into executions.
    var executions = {};
    controls.forEach((control) => {

      // Create group.
      if (!executions.hasOwnProperty(control.eid)) {
        executions[control.eid] = {
          id: control.eid,
          status: 'pass',
          timestamp: control.time,
          controls: [control],
        }
      }
      // Add to group.
      else {
        // Add control to execution.
        executions[control.eid]['controls'].push(control)
      }

    });

    // Convert executions to array in order to sort.
    var unsorted_executions = [];
    Object.values(executions).forEach((execution) => {
      unsorted_executions.push(execution);
    });

    // Sort executions.
    var sorted_executions = unsorted_executions.sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);

    // Set executions.
    this.state.executions = sorted_executions;

  }

  render() {
    return (
      <div id="executions">
        {this.state.executions.map((execution, index) =>
          <ControlExecution execution={execution} key={execution.id} />
        )}
      </div>
    );
  }
}

export default hot(module)(ControlExecutions);
