import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Executions extends React.Component {

  constructor(props) {
    super(props);

    console.log(props);

    this.state = {}
    this.state.executions = []

    this.process(props.reflections);
  }

  process(reflections) {

    //reflections.forEach((reflection) => {
    //  console.log(reflection)
    //});

  }

  render() {
    return (
      <div>
        test
      </div>
    );
  }
}

export default hot(module)(Executions);
