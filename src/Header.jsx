import React, { Component } from "react";
import { hot } from "react-hot-loader";
import * as Contexts from './Contexts';
import '../styles/_header.scss'

class Header extends React.Component {

  static contextType = Contexts.WriteModeContext;

  constructor(props) {
    super(props);
  }

  render() {

    var writeModeLabel = "Read-Only";
    if (this.context == true) {
      writeModeLabel = "Read/Write";
    }

    return (
      <header id="header">
        <div className="container">

          <img id="logo" src="./Assets/Logo.svg" />
          <h1 id="title">Reflekt</h1>

          <div id="write-mode" className={(this.context ? 'read-write' : 'read-only')}>
            <label>{writeModeLabel}</label>
            <div className="icon"></div>
          </div>

        </div>
      </header>
    );
  }
}

export default hot(module)(Header)
