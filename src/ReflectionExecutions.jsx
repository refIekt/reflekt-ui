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

      // Separate executions by reflection number.
      var group_id = `${reflection.eid}-${reflection.num}`

      // Create group.
      if (!executions.hasOwnProperty(group_id)) {
        executions[group_id] = {
          id: reflection.eid,
          number: reflection.num,
          status: 'pass',
          timestamp: reflection.time,
          reflections: [reflection],
        }
        // Flag control.
        executions[group_id]['is_control'] = false
        if (reflection.num === 0) {
          executions[group_id]['is_control'] = true
        }
      }
      // Add to group.
      else {
        // Add reflection to execution.
        executions[group_id]['reflections'].push(reflection)
      }

      // Flag execution as failed when a reflection fails.
      if (reflection['status'] == 'fail') {
        executions[group_id]['status'] = 'fail';
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
