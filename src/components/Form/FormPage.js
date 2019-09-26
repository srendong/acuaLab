import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const Form = props => {
  return (
    <MDBContainer className="form">
      <MDBRow center>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Write Your Data</p>
                <div className="grey-text">
                  <MDBInput
                    label="Amonia"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Nitrites"
                    icon="envelope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Nitrates"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput label="Ph" icon="lock" group type="text" validate />
                  <MDBInput
                    label="Water temperature"
                    icon="lock"
                    group
                    type="text"
                    validate
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Save
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Form;
