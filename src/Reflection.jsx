import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Reflection extends React.Component {

  constructor(props) {
    super(props);
  }

  delete() {
    
  }

  render() {
    return (
      <div>
        <button onClick={(e) => this.delete(id, e)}>Delete Row</button>
      </div>
    );
  }
}

export default hot(module)(Reflection);
