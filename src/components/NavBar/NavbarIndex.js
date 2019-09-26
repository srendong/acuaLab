import React, { Component } from "react";
// components
import NavbarPage from "./NavbarPage";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <NavbarPage
        state={this.state}
        onClick={this.onClick}
        isOpen={this.state.collapse}
      />
    );
  }
}

export default NavBar;
