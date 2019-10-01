import React, { Component } from "react";
import { connect } from "react-redux";
//components
import FormPage from "./FormPage";
import newMeasurement from "../../redux/actions/newMeasurement";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().valueOf(),
      date: new Date(),
      amonia: "",
      nitrites: "",
      nitrates: "",
      ph: "",
      waterTemperature: "",
      airTemperature: ""
    };
    this.first = React.createRef();
  }

  componentDidMount() {
    // this.first.current.focus()
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(newMeasurement(this.state));
    this.setState({
      amonia: "",
      nitrites: "",
      nitrates: "",
      ph: "",
      waterTemperature: "",
      airTemperature: ""
      
    });
  };
  render() {
    return (
      <div>
        <FormPage
          value={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          firts={this.first}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    measurements: state.measurements
  };
};

export default connect(mapStateToProps)(Form);
