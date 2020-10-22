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

          <svg id="logo" enable-background="new 0 0 500 500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
            <path d="m307.5 80.5h-115l-57.5 205h230z" fill="#0047d0"/>
            <path d="m178 76.5-53.1-44-117.9 139 116 112z" fill="#d04800"/>
            <path d="m190.4 467.5h115l57.5-168h-229z" fill="#0047d0" opacity=".7"/>
            <path d="m177 467.5-81-85-92-197 115 113z" fill="#d04800" opacity=".7"/>
            <g fill="#008c33">
              <path d="m322 76.5 53.1-44 118 139-116 112z"/>
              <path d="m320 467.5 84-85 92-197-117 113z" opacity=".7"/>
            </g>
          </svg>

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
