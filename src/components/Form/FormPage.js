import React from "react";
import { MDBRow, MDBBtn, MDBCard, MDBInput } from "mdbreact";

const FormPage = props => {
  return (
    <MDBCard className="fondoImagen card-image">
      <form onSubmit={props.handleSubmit}>
        <div className="text-white rgba-stylish-strong py-3 px-5 z-depth-4">
          <div className="text-center">
            <h3 className="white-text mb-5 mt-3 font-weight-bold">
              <strong>Datos </strong>
              <span className="green-text font-weight-bold">
                <strong> Diarios</strong>
              </span>
            </h3>
          </div>
          <MDBInput
            ref={props.first}
            label="Amonia"
            name="amonia"
            value={props.value.amonia}
            icon="leaf"
            group
            type="number"
            validate
            labelClass="white-text"
            onChange={props.handleChange}
            className="white-text"
          />
          <MDBInput
            label="Nitratos"
            name="nitrates"
            icon="spa"
            group
            type="number"
            validate
            labelClass="white-text"
            value={props.value.nitrates}
            onChange={props.handleChange}
            className="white-text"
          />
          <MDBInput
            label="Nitritos"
            name="nitrites"
            icon="holly-berry"
            group
            type="number"
            validate
            labelClass="white-text"
            value={props.value.nitrites}
            onChange={props.handleChange}
            className="white-text"
          />
          <MDBInput
            label="Ph"
            name="ph"
            icon="water"
            group
            type="number"
            validate
            labelClass="white-text"
            value={props.value.ph}
            onChange={props.handleChange}
            className="white-text"
          />
          <MDBInput
            label="Temperatura del agua"
            name="waterTemperature"
            icon="temperature-high"
            group
            type="number"
            validate
            labelClass="white-text"
            value={props.value.waterTemperature}
            onChange={props.handleChange}
            className="white-text"
          />
          <MDBInput
            label="Temperatura ambiente"
            name="airTemperature"
            icon="temperature-low"
            group
            type="number"
            validate
            labelClass="white-text"
            value={props.value.airTemperature}
            onChange={props.handleChange}
            className="white-text"
          />

          <MDBRow className="d-flex align-items-center mb-4">
            <div className="text-center mb-3 col-md-12">
              <MDBBtn
                color="success"
                rounded
                type="submit"
                className="btn-block z-depth-1"
              >
                Guardar
              </MDBBtn>
            </div>
          </MDBRow>
        </div>
      </form>
    </MDBCard>
  );
};
export default FormPage;
