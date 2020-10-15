import React, { Component } from "react";
import { hot } from "react-hot-loader";

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <img src="./Assets/Logo.svg" />
        <h1>Reflekt</h1>
        <div id="write-mode">
          {this.props.writeMode}
        </div>
      </header>
    );
  }
}

export default hot(module)(Header)
