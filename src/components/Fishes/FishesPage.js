import React from "react";
import { connect } from "react-redux";
//components
import NavBar from "../NavBar/NavbarIndex";
import Tank from "../Tank/TankIndex";

const FishesPage = props => {
  return (
    <div className="fishes">
      <NavBar />
      <div className=" container-fluid">
        <div className="row">
          <div className="col text-center py-4">
            <h2>Peces</h2>
          </div>
        </div>
        <div className="contenido row justify-content-around hv-100">
          <div className="col-12 col-md-8 border">
            <div className="container-fluid">
              <div className="row">
                {props.tanks.map(tank => (
                  <div
                    key={tank.id}
                    className="tank col-12 col-md-3 border py-2"
                  >
                    <Tank
                      tank={tank}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 bg-success"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tanks: state.tanks
  };
};

export default connect(mapStateToProps)(FishesPage);
