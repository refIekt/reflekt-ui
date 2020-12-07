import React, { Component } from "react";
import { hot } from "react-hot-loader";
import ReflectionExecution from "./ReflectionExecution"

class ReflectionExecutions extends React.Component {

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
      if (reflection.base_id == null) {
        // Create execution from base reflection.
        var key = `${reflection.exe_id}-${reflection.ref_num}`
        executions[key] = {
          id: reflection.exe_id,
          number: reflection.ref_num,
          status: 'pass',
          timestamp: reflection.time,
          reflections: [reflection],
        }
        // Flag when reflection is a control.
        executions[key]['is_control'] = false
        if (reflection.ref_num === 0) {
          executions[key]['is_control'] = true
        }
      }
      // When child reflection.
      else {
        // Add reflection to execution.
        var key = `${reflection.base_id}-${reflection.ref_num}`
        executions[key]['reflections'].push(reflection)
      }

      // Flag execution as failed when a reflection fails.
      if (reflection['status'] == 'fail') {
        executions[key]['status'] = 'fail';
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
          <ReflectionExecution execution={execution} key={execution.id + "-" + execution.number} />
        )}
      </div>
    );
  }
}

export default hot(module)(ReflectionExecutions);
