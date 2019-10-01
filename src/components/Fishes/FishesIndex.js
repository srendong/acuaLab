import React, { Component } from "react";
import { connect } from "react-redux";
//components
import FishesPage from "./FishesPage";

class Fishes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <FishesPage />;
  }
}

const mapStateToProps = state => {
  return {
    tanks: state.tanks
  };
};

export default connect(mapStateToProps)(Fishes);
