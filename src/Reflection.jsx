import React, { Component } from "react";
import { hot } from "react-hot-loader";
import '../styles/_reflection.scss'

class Reflection extends React.Component {

  constructor(props) {
    super(props);
  }

  delete(id, e) {

  }

  render() {
    return (
      <div class="reflection">

        <span class="title">{this.props.reflection.c}</span>
        <span class="method">{this.props.reflection.f}</span>

        <div class="actions">
          <button onClick={(e) => this.keep(id, e)}>Keep</button>
          <button onClick={(e) => this.delete(id, e)}>Delete</button>
        </div>

      </div>
    );
  }
}

export default hot(module)(Reflection);
