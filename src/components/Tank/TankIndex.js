import React, { Component } from "react";
import { connect } from "react-redux";
import saveTank from "../../redux/actions/saveTank";
import editTank from "../../redux/actions/editTank";

//componetns
import TankPage from "./TankPage";

class Tank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.tank.id,
      name: this.props.tank.name,
      fisehesQuantity: this.props.tank.fisehesQuantity,
      fishesWeight: this.props.tank.fishesWeight,
      fishesMeasure: this.props.tank.fishesMeasure,
      foodType: this.props.tank.foodType,
      dailyFood: this.props.tank.dailyFood,
      initialDate: this.props.tank.initialDate,
      edit: false
    };
  }
  handleEdit = id => {
    this.props.dispatch(editTank(id));
  };
  handleSave = (id, data, e) => {
    e.preventDefault();
    this.props.dispatch(saveTank(id, data));
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <TankPage
        currentState={this.state}
        tank={this.props.tank}
        editTank={() => this.handleEdit(this.props.tank.id)}
        saveTank={e => this.handleSave(this.props.tank.id, this.state, e)}
        handleChange={this.handleChange}
      />
    );
  }
}

export default connect()(Tank);
