import React from "react";
//MDB
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink
} from "mdbreact";
import { HashRouter as Router } from "react-router-dom";

const NavbarPage = ({ state, onClick }) => {
  return (
    <div className="navBar">
      <div>
        <header>
          <Router>
            <MDBNavbar
              className="nav"
              // fixed="top"
              dark
              expand="md"
              scrolling
              color="blue-grey darken-4"
              // transparent
            >
              <MDBNavbarBrand href="/home">
                <strong>Aqua Lab</strong>
              </MDBNavbarBrand>
              {!state.isWideEnough && <MDBNavbarToggler onClick={onClick} />}
              <MDBCollapse isOpen={state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink className="link" to="/home">
                      Home
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/fishes">
                      Fishes
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/plants">
                      Plants
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/water">
                      Water
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="link" to="/air">
                      Air
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>
        </header>
      </div>
    </div>
  );
};

export default NavbarPage;
