import React from "react";
//components
import NavBar from '../NavBar/NavbarIndex'
import Form from '../Form/FormPage'


const HomePage = () => {
  return (
    <div className="home">
    <NavBar/>
    <div className="container">
      <div className="row mt-4">
       <div className="col-6 col-md-3 border d-flex justify-content-center">
         <img clasName="imagen rounded-circle " src="" alt="" style={{height:"10rem", width:"10rem"}}/>
       </div>
       <div className="col-6 col-md-3 border d-flex justify-content-center">
         <img clasName="imagen rounded-circle " src="" alt="" style={{height:"10rem", width:"10rem"}}/>
       </div>
       <div className="col-6 col-md-3 border d-flex justify-content-center">
         <img clasName="imagen rounded-circle " src="" alt="" style={{height:"10rem", width:"10rem"}}/>
       </div>
       <div className="col-6 col-md-3 border d-flex justify-content-center">
         <img clasName="imagen rounded-circle " src="" alt="" style={{height:"10rem", width:"10rem"}}/>
       </div>
      </div>
      <div className="row">
        <div className="col  d-flex justify-content-center mt-4">
          <Form/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
