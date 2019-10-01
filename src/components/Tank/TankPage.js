import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";

const Tank = ({ tank, saveTank, editTank, handleChange, currentState }) => {
  return (
    <div className="tank">
      {tank.edit === false ? (
        <div>
          <h3 className="text-center mt-2">
            <span>{tank.name}</span>
          </h3>
          <div className="d-flex justify-content-between">
            <h6>Cantidad Peces:</h6>
            <span>{tank.fisehesQuantity}</span>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Peso Promedio de peces:</h6>
            <span>{tank.fishesWeight} g</span>
          </div>
          <div className="d-flex justify-content-between">
            <h6> Medida promedio de peces:</h6>
            <span>{tank.fishesMeasure} cm</span>
          </div>
          <div className="d-flex justify-content-between">
            <h6> Tipo de comida:</h6>
            <span>.{tank.foodType}</span>
          </div>
          <div className="d-flex justify-content-between">
            <h6> Cantidad de comida en gramos:</h6>
            <span>{tank.dailyFood} g</span>
          </div>
          <div className="row justify-content-end">
            <div className="col text-center">
              <button className="btn btn-grey" onClick={editTank}>
                Editar
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={saveTank}>
            <MDBInput
              label="Cantidad Peces"
              labelClass='white-text'
              className="white-text"
              size="sm"
              name="fisehesQuantity"
              onChange={handleChange}
              value={currentState.fisehesQuantity}
            />
            <MDBInput
              label="Peso Promedio de peces (g)"
              labelClass='white-text'
              className="white-text"
              size="sm"
              name="fishesWeight"
              onChange={handleChange}
              value={currentState.fishesWeight}
            />
            <MDBInput
              label="Medida promedio de peces (cm)"
              labelClass='white-text'
              className="white-text"
              size="sm"
              name="fishesMeasure"
              onChange={handleChange}
              value={currentState.fishesMeasure}
            />
            <MDBInput
              label="Tipo de comida"
              labelClass='white-text'
              className="white-text"
              size="sm"
              name="foodType"
              onChange={handleChange}
              value={currentState.foodType}
            />
            <MDBInput
              label="Cantidad de comida (g)"
              labelClass='white-text'
              className="white-text"
              size="sm"
              name="dailyFood"
              onChange={handleChange}
              value={currentState.dailyFood}
            />
            <div class="btn-group" role="group" aria-label="Basic example">
              <MDBBtn color="grey" type="submit">
                Guardar
              </MDBBtn>
              <MDBBtn color="grey" onClick={editTank}>
                Cancelar
              </MDBBtn>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Tank;
