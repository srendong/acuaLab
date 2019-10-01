import React from "react";
//react-router
import { Link } from "react-router-dom";
//components
import NavBar from "../NavBar/NavbarIndex";
import Form from "../Form/FormIndex";
import air from "../../assets/air.png";
import water from "../../assets/water.png";
import fish from "../../assets/fish.png";
import plant from "../../assets/plant.png";

const HomePage = () => {
  return (
    <div className="home">
      <NavBar />
      <div className="container ">
        <div className="row justify-content-center mt-4 px-5">
          <div className="col-6 col-md-2 d-flex justify-content-center py-1">
            <Link to="/plants">
              <div className="externa p-3 rounded-circle d-flex justify-content-center align-items-center">
                <img className="imagen   " src={plant} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center py-1">
            <Link to="/fishes">
              <div className="externa p-3 rounded-circle d-flex justify-content-center align-items-center ">
                <img className="imagen " src={fish} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center py-1">
            <Link to="/water">
              <div className="externa p-3 rounded-circle d-flex justify-content-center align-items-center">
                <img className="imagen   " src={water} alt="" />
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-2 d-flex justify-content-center py-1">
            <Link to="/water">
              <div className="externa p-3 rounded-circle d-flex justify-content-center align-items-center">
                <img className="imagen   " src={air} alt="" />
              </div>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-7 d-flex justify-content-center my-4">
          <div className="w-100">
            <Form />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
